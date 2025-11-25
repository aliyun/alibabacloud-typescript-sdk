// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventStatisticResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  aiSensitiveDataCount?: number;
  /**
   * @example
   * 32
   */
  assetCount?: number;
  /**
   * @example
   * C5DDD596-1191-5F36-A504-8733045A****
   */
  requestId?: string;
  /**
   * @example
   * 2
   */
  sensitiveDataCount?: number;
  /**
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @example
   * 0
   */
  totalTraffic?: number;
  static names(): { [key: string]: string } {
    return {
      aiSensitiveDataCount: 'AiSensitiveDataCount',
      assetCount: 'AssetCount',
      requestId: 'RequestId',
      sensitiveDataCount: 'SensitiveDataCount',
      totalCount: 'TotalCount',
      totalTraffic: 'TotalTraffic',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aiSensitiveDataCount: 'number',
      assetCount: 'number',
      requestId: 'string',
      sensitiveDataCount: 'number',
      totalCount: 'number',
      totalTraffic: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

