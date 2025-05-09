// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogStoreInfoResponseBody extends $dara.Model {
  /**
   * @example
   * xxx-logstore
   */
  logStoreName?: string;
  /**
   * @example
   * project-xxx-cn-hangzhou
   */
  projectName?: string;
  /**
   * @example
   * 50000000
   */
  quota?: number;
  /**
   * @example
   * C6C3B72B********E95FB0A161
   */
  requestId?: string;
  /**
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      quota: 'Quota',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStoreName: 'string',
      projectName: 'string',
      quota: 'number',
      requestId: 'string',
      ttl: 'number',
      used: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

