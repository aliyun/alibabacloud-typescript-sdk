// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AliyunConsoleServiceInfoDTO extends $dara.Model {
  /**
   * @remarks
   * The URL to activate the service.
   * 
   * @example
   * https://www.aliyun.com/product/ai-algorithm
   */
  buyUrl?: string;
  /**
   * @remarks
   * The URL of the service documentation.
   * 
   * @example
   * https://www.aliyun.com/product/ai-algorithm
   */
  documentUrl?: string;
  /**
   * @remarks
   * The maximum number of concurrent requests allowed for the free trial.
   * 
   * @example
   * 10
   */
  freeConcurrencyCount?: number;
  /**
   * @remarks
   * The number of free API calls available.
   * 
   * @example
   * 100
   */
  freeCount?: number;
  /**
   * @remarks
   * The unique code for the service.
   * 
   * @example
   * online_ai_algorithm_personalized_text_to_image_call_count
   */
  serviceCode?: string;
  /**
   * @remarks
   * The display name of the service.
   * 
   * @example
   * AI算法模型-个性化文生图-在线按量调用
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      buyUrl: 'buyUrl',
      documentUrl: 'documentUrl',
      freeConcurrencyCount: 'freeConcurrencyCount',
      freeCount: 'freeCount',
      serviceCode: 'serviceCode',
      serviceName: 'serviceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buyUrl: 'string',
      documentUrl: 'string',
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

