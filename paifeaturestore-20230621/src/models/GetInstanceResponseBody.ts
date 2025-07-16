// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyFeatureDBInstanceInfo extends $dara.Model {
  status?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetInstanceResponseBody extends $dara.Model {
  featureDBInstanceInfo?: GetInstanceResponseBodyFeatureDBInstanceInfo;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @example
   * Success
   */
  message?: string;
  /**
   * @example
   * 0.8
   */
  progress?: number;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * 1C5B1511-8A5B-59C3-90AF-513F9210E882
   */
  requestId?: string;
  /**
   * @example
   * Running
   */
  status?: string;
  /**
   * @example
   * Basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureDBInstanceInfo: 'FeatureDBInstanceInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      message: 'Message',
      progress: 'Progress',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureDBInstanceInfo: GetInstanceResponseBodyFeatureDBInstanceInfo,
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      message: 'string',
      progress: 'number',
      regionId: 'string',
      requestId: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.featureDBInstanceInfo && typeof (this.featureDBInstanceInfo as any).validate === 'function') {
      (this.featureDBInstanceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

