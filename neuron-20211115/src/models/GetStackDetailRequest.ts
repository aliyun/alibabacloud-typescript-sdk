// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStackDetailRequest extends $dara.Model {
  /**
   * @example
   * 2022-11-08 15:03:22
   */
  endTime?: string;
  /**
   * @example
   * TEST
   */
  env?: string;
  /**
   * @example
   * 12
   */
  rpcId?: string;
  serviceGroupId?: number;
  /**
   * @example
   * feishu-attendance-app
   */
  serviceName?: string;
  /**
   * @example
   * 2022-12-06 10:24:44
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'endTime',
      env: 'env',
      rpcId: 'rpcId',
      serviceGroupId: 'serviceGroupId',
      serviceName: 'serviceName',
      startTime: 'startTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      env: 'string',
      rpcId: 'string',
      serviceGroupId: 'number',
      serviceName: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

