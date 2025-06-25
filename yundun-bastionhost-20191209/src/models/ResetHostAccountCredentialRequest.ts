// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetHostAccountCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the logon credential that you want to delete. Valid values:
   * 
   * *   **Password**
   * *   **PrivateKey**
   * 
   * This parameter is required.
   * 
   * @example
   * Password
   */
  credentialType?: string;
  /**
   * @remarks
   * The ID of the host account for which the logon credential is to be deleted.
   * 
   * >  You can call the [ListHostAccounts](https://help.aliyun.com/document_detail/204372.html) operation to query the ID of the host account.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostAccountId?: string;
  /**
   * @remarks
   * The ID of the bastion host from which you want to delete the logon credential for the host account.
   * 
   * >  You can call the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query the ID of the bastion host.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The region ID of the bastion host from which you want to delete the logon credential for the host account.
   * 
   * >  For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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

