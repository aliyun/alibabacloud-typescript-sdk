// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AliyunConsoleServiceInfoDTO extends $dara.Model {
  /**
   * @example
   * https://www.aliyun.com/product/ai-algorithm
   */
  buyUrl?: string;
  /**
   * @example
   * https://www.aliyun.com/product/ai-algorithm
   */
  documentUrl?: string;
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

