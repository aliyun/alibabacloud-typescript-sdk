// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyUIAccountPasswordRequest extends $dara.Model {
  /**
   * @remarks
   * The username of the cluster management system to be reset. If no user has been created for the HBase instance, the default username is **root**.
   * 
   * This parameter is required.
   * 
   * @example
   * test01
   */
  accountName?: string;
  /**
   * @remarks
   * The new password for the target username of the cluster management system. The password must be 2 to 30 characters in length and must contain one or more of the following character types: uppercase letters, lowercase letters, special characters, and digits. Supported special characters are underscores (_) and hyphens (-).
   * 
   * This parameter is required.
   * 
   * @example
   * **********
   */
  accountPassword?: string;
  /**
   * @remarks
   * The ID of the target instance. You can call the [DescribeInstances](https://help.aliyun.com/document_detail/144595.html) operation to obtain the instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ld-bp150tns0sjxs****
   */
  clusterId?: string;
  static names(): { [key: string]: string } {
    return {
      accountName: 'AccountName',
      accountPassword: 'AccountPassword',
      clusterId: 'ClusterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accountName: 'string',
      accountPassword: 'string',
      clusterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

