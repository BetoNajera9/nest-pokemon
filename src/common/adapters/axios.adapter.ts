import { HttpService } from '@nestjs/axios';

import { HttpAdapter } from '../interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  constructor(
    private readonly httpService: HttpService
  ) {
  }

  async get<T>(url: string): Promise<T> {
    try {
      const { data } = await this.httpService.axiosRef.get<T>(url);

      return data;
    } catch (error) {
      console.log('🚀 ~ AxiosAdapter ~ error:', error);

      throw new Error("This is an error - Check logs");

    }
  }
}
