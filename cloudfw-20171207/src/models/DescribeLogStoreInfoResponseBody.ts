// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogStoreInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the SLS LogStore in the log service.
   * 
   * @example
   * xxx-logstore
   */
  logStoreName?: string;
  /**
   * @remarks
   * The Project name of the log service.
   * 
   * @example
   * project-xxx-cn-hangzhou
   */
  projectName?: string;
  /**
   * @remarks
   * Available log storage capacity. Unit: Byte.
   * 
   * @example
   * 50000000
   */
  quota?: number;
  /**
   * @remarks
   * The region ID for log delivery.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of this request.
   * 
   * @example
   * C6C3B72B********E95FB0A161
   */
  requestId?: string;
  /**
   * @remarks
   * Log storage duration. Unit: days.
   * 
   * @example
   * 20
   */
  ttl?: number;
  /**
   * @remarks
   * Used storage capacity. Unit: Byte.
   * 
   * > The statistics of the log service have a delay of approximately two hours.
   * 
   * @example
   * 0
   */
  used?: number;
  static names(): { [key: string]: string } {
    return {
      logStoreName: 'LogStoreName',
      projectName: 'ProjectName',
      quota: 'Quota',
      regionId: 'RegionId',
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
      regionId: 'string',
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

