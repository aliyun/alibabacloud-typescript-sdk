// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetInstanceResponseBodyFeatureDBInfo extends $dara.Model {
  /**
   * @remarks
   * The status of the instance.
   */
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

export class GetInstanceResponseBodyFeatureDBInstanceInfo extends $dara.Model {
  /**
   * @remarks
   * The status of the instance.
   */
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
  /**
   * @remarks
   * The information about the FeatureDB instance.
   */
  featureDBInfo?: GetInstanceResponseBodyFeatureDBInfo;
  /**
   * @remarks
   * The information about the FeatureDB instance.
   * 
   * @deprecated
   */
  featureDBInstanceInfo?: GetInstanceResponseBodyFeatureDBInstanceInfo;
  /**
   * @remarks
   * The time when the instance was created. The time is in the ISO 8601 format.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtCreateTime?: string;
  /**
   * @remarks
   * The time when the instance was last updated. The time is in the ISO 8601 format.
   * 
   * @example
   * 2023-07-04T11:26:09.036+08:00
   */
  gmtModifiedTime?: string;
  /**
   * @remarks
   * The message that is returned for the instance provisioning.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The progress of instance provisioning.
   * 
   * @example
   * 0.8
   */
  progress?: number;
  /**
   * @remarks
   * The region where the instance is deployed.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1C5B1511-8A5B-59C3-90AF-513F9210E882
   */
  requestId?: string;
  /**
   * @remarks
   * The status of the instance. Valid values:
   * 
   * - Initializing: The instance is being initialized.
   * 
   * - Running: The instance is running.
   * 
   * - Failure: The instance fails to be created.
   * 
   * - Stopped: The instance is stopped.
   * 
   * @example
   * Running
   */
  status?: string;
  /**
   * @remarks
   * The type of the instance.
   * 
   * @example
   * Basic
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      featureDBInfo: 'FeatureDBInfo',
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
      featureDBInfo: GetInstanceResponseBodyFeatureDBInfo,
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
    if(this.featureDBInfo && typeof (this.featureDBInfo as any).validate === 'function') {
      (this.featureDBInfo as any).validate();
    }
    if(this.featureDBInstanceInfo && typeof (this.featureDBInstanceInfo as any).validate === 'function') {
      (this.featureDBInstanceInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

