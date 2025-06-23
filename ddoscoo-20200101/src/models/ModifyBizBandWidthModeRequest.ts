// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBizBandWidthModeRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * > You can call the [DescribeInstanceIds](https://help.aliyun.com/document_detail/157459.html) operation to query the IDs of all instances.
   * 
   * This parameter is required.
   * 
   * @example
   * ddoscoo-cn-zvp2ay9b****
   */
  instanceId?: string;
  /**
   * @remarks
   * The metering method of the burstable clean bandwidth feature. Valid values:
   * 
   * *   **month**: the metering method of monthly 95th percentile
   * *   **day**: the metering method of daily 95th percentile
   * 
   * This parameter is required.
   * 
   * @example
   * month
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

