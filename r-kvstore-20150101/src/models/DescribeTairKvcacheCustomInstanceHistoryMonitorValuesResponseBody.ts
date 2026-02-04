// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTairKVCacheCustomInstanceHistoryMonitorValuesResponseBody extends $dara.Model {
  /**
   * @example
   * { “timestamp”: 1490164200000, “Maximum”: 100, “userId”: “1234567898765432”, “Minimum”: 4.55, “instanceId”: “i-bp18abl200xk9599ck7c”, “Average”: 93.84 }
   */
  datapoints?: string;
  /**
   * @example
   * 212db86sca4384811e0b5e8707ec2****
   */
  nextToken?: string;
  /**
   * @example
   * 60
   */
  period?: string;
  /**
   * @example
   * F3F44BE3-5419-4B61-9BAC-E66E295A****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      datapoints: 'Datapoints',
      nextToken: 'NextToken',
      period: 'Period',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      datapoints: 'string',
      nextToken: 'string',
      period: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

