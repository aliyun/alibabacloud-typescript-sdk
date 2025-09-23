// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpTrafficRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1.1.1.1
   */
  eip?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1536734120
   */
  endTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 60
   */
  interval?: number;
  /**
   * @example
   * 233
   */
  port?: number;
  /**
   * @example
   * http
   */
  queryProtocol?: string;
  /**
   * @example
   * xxx
   */
  resourceGroupId?: string;
  /**
   * @example
   * 1.1.1.1
   */
  sourceIp?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1536734112
   */
  startTime?: number;
  static names(): { [key: string]: string } {
    return {
      eip: 'Eip',
      endTime: 'EndTime',
      interval: 'Interval',
      port: 'Port',
      queryProtocol: 'QueryProtocol',
      resourceGroupId: 'ResourceGroupId',
      sourceIp: 'SourceIp',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eip: 'string',
      endTime: 'number',
      interval: 'number',
      port: 'number',
      queryProtocol: 'string',
      resourceGroupId: 'string',
      sourceIp: 'string',
      startTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

