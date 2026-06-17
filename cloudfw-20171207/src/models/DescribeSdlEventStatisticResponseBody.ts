// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSdlEventStatisticResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of AI-related leak threats.
   * 
   * @example
   * 1
   */
  aiSensitiveDataCount?: number;
  /**
   * @remarks
   * The total number of assets.
   * 
   * @example
   * 32
   */
  assetCount?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C5DDD596-1191-5F36-A504-8733045A****
   */
  requestId?: string;
  /**
   * @remarks
   * The number of sensitive data leak events.
   * 
   * @example
   * 2
   */
  sensitiveDataCount?: number;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  /**
   * @remarks
   * The total traffic. Unit: bytes.
   * 
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

