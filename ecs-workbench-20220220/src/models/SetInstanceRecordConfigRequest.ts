// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetInstanceRecordConfigRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * true
   */
  enabled?: boolean;
  /**
   * @example
   * 7
   */
  expirationDays?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * i-xxx
   */
  instanceId?: string;
  /**
   * @example
   * acs:oss:cn-shanghai:123:workbench-record-123-1/record
   */
  recordStorageTarget?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      enabled: 'Enabled',
      expirationDays: 'ExpirationDays',
      instanceId: 'InstanceId',
      recordStorageTarget: 'RecordStorageTarget',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enabled: 'boolean',
      expirationDays: 'number',
      instanceId: 'string',
      recordStorageTarget: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

