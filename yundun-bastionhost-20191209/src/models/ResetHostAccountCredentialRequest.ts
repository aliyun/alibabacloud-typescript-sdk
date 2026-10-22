// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetHostAccountCredentialRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the logon credential to purge. Valid values:
   * - **Password**: password
   * - **PrivateKey**: SSH private key
   * 
   * This parameter is required.
   * 
   * @example
   * Password
   */
  credentialType?: string;
  /**
   * @remarks
   * The ID of the host account whose logon credentials you want to purge.
   * > You can call the [ListHostAccounts](https://help.aliyun.com/document_detail/204372.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  hostAccountId?: string;
  /**
   * @remarks
   * The instance ID of the Bastionhost instance to which the host account whose logon credentials you want to purge belongs.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to obtain the value of this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-rp640dg****
   */
  instanceId?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 3
   */
  projectId?: number;
  /**
   * @remarks
   * The region ID of the Bastionhost instance to which the host account whose logon credentials you want to purge belongs.
   * > For more information about the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
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
      projectId: 'ProjectId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      credentialType: 'string',
      hostAccountId: 'string',
      instanceId: 'string',
      projectId: 'number',
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

