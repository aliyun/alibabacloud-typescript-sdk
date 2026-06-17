// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUserSlsLogStorageTimeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * vipcloudfw-cn-uqm3fz****
   */
  instanceId?: string;
  /**
   * @remarks
   * The log version.
   * 
   * @example
   * 1
   */
  logVersion?: number;
  /**
   * @remarks
   * The region ID of Log Service (SLS).
   * 
   * @example
   * ap-southeast-1
   */
  slsRegionId?: string;
  /**
   * @remarks
   * The retention period, in days.
   * 
   * This parameter is required.
   * 
   * @example
   * 180
   */
  storageTime?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      logVersion: 'LogVersion',
      slsRegionId: 'SlsRegionId',
      storageTime: 'StorageTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      logVersion: 'number',
      slsRegionId: 'string',
      storageTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

