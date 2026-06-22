// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class InstallBackupClientRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the mitigation policies. Valid values:
   * 
   * - **1.0.0**: The version of the mitigation policies is 1.0.0.
   * - **2.0.0**: The version of the mitigation policies is 2.0.0.
   * 
   * This parameter is required.
   * 
   * @example
   * 2.0.0
   */
  policyVersion?: string;
  /**
   * @remarks
   * The UUID of the server on which you want to install the anti-ransomware client.
   * 
   * > > You can call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this value. UuidList and Uuid cannot both be empty.
   * 
   * @example
   * inet-617eddab-7df4-4a51-b217-a3f59194****
   */
  uuid?: string;
  /**
   * @remarks
   * The list of UUIDs of the servers that you want to protect.
   * > Call the [DescribeCloudCenterInstances](~~DescribeCloudCenterInstances~~) operation to obtain this parameter.
   * 
   * @example
   * ["3bb30859-b3b5-4f28-868f-b0892c98****", "3bb30859-b3b5-4f28-868f-b0892c98****"]
   */
  uuidList?: string[];
  static names(): { [key: string]: string } {
    return {
      policyVersion: 'PolicyVersion',
      uuid: 'Uuid',
      uuidList: 'UuidList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      policyVersion: 'string',
      uuid: 'string',
      uuidList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.uuidList)) {
      $dara.Model.validateArray(this.uuidList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

