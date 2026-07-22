// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySlsDispatchConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The detailed configuration to modify.
   * <details>
   * <summary>Format for version 1</summary>
   * {"global":{"slsRegionId":"ap-southeast-1","logTime":180,"logStorage":1000}}
   * </details>
   * 
   * <details>
   * <summary>Format for version 2</summary>
   * {"cn":{"slsRegionId":"ap-southeast-1","logTime":180,"logStorage":3000},"intl":{"slsRegionId":"ap-southeast-1","logTime":180,"logStorage":2000}}
   * </details>
   * The fields are described as follows:
   * 
   * - slsRegionId: The region ID to which logs are delivered.
   * - logTime: The storage duration of logs. Unit: days.
   * - logStorage: The log storage capacity. Unit: GB. The total capacity specified must not exceed the total capacity purchased by the user.
   * 
   * @example
   * {"global":{"slsRegionId":"cn-hangzhou","logTime":180,"logStorage":1000}}
   */
  detailConfig?: string;
  /**
   * @remarks
   * The log version. A value of 1 indicates one Logstore. A value of 2 indicates two Logstores.
   * 
   * 
   * >Notice: If ModifyType is set to version, set LogVersion to the target version. If ModifyType is set to config, set LogVersion to the current version of the user.
   * 
   * @example
   * 1
   */
  logVersion?: number;
  /**
   * @remarks
   * The modification type. Valid values:
   * 
   * - version: The version is changed. For example, the version is changed from 1 (logs are delivered to one Logstore) to 2 (logs are delivered to two Logstores).
   * 
   * - config: The configuration is changed. For example, the log delivery region or the storage duration of logs is modified.
   * 
   * @example
   * version
   */
  modifyType?: string;
  static names(): { [key: string]: string } {
    return {
      detailConfig: 'DetailConfig',
      logVersion: 'LogVersion',
      modifyType: 'ModifyType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detailConfig: 'string',
      logVersion: 'number',
      modifyType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

