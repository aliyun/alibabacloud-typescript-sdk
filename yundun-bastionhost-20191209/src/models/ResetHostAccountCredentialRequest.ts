// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetHostAccountCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The type of logon credential to clear. Valid values:
   * 
   * - **Password**: The password.
   * 
   * - **PrivateKey**: The SSH private key.
   * 
   * This parameter is required.
   * 
   * @example
   * Password
   */
  credentialType?: string;
  /**
   * @remarks
   * The ID of the host account. The logon credential of this account will be cleared.
   * 
   * > Call the [ListHostAccounts](https://help.aliyun.com/document_detail/204372.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostAccountId?: string;
  /**
   * @remarks
   * The ID of the Bastionhost instance. The instance contains the host account.
   * 
   * > Call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-rp640dg****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the Bastionhost instance.
   * 
   * > For information about region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      credentialType: 'CredentialType',
      hostAccountId: 'HostAccountId',
      instanceId: 'InstanceId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialType: 'string',
      hostAccountId: 'string',
      instanceId: 'string',
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

