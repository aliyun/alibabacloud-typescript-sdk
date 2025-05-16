// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AliyunConsoleOpenApiQueryAliyunConsoleServcieListResponseBodyData extends $dara.Model {
  /**
   * @example
   * 10
   */
  freeConcurrencyCount?: number;
  /**
   * @example
   * 100
   */
  freeCount?: number;
  /**
   * @example
   * online_ai_algorithm_personalized_text_to_image_call_count
   */
  serviceCode?: string;
  /**
   * @example
   * AI算法模型-个性化文生图-在线按量调用
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      freeConcurrencyCount: 'FreeConcurrencyCount',
      freeCount: 'FreeCount',
      serviceCode: 'ServiceCode',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      freeConcurrencyCount: 'number',
      freeCount: 'number',
      serviceCode: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

