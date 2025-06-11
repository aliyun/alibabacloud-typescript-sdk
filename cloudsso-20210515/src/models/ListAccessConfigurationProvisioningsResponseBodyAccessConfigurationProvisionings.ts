// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAccessConfigurationProvisioningsResponseBodyAccessConfigurationProvisionings extends $dara.Model {
  /**
   * @remarks
   * The ID of the access configuration.
   * 
   * @example
   * ac-00ccule7tadaijxc****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * The name of the access configuration.
   * 
   * @example
   * VPC-Admin
   */
  accessConfigurationName?: string;
  /**
   * @remarks
   * The first time when the access configuration was provisioned.
   * 
   * @example
   * 2021-07-26T08:54:14Z
   */
  createTime?: string;
  /**
   * @remarks
   * The name of the custom policy that is created for an account in the resource directory.
   */
  RAMPolicyNames?: string[];
  /**
   * @remarks
   * The name of the RAM role that is created for an account in the resource directory.
   * 
   * @example
   * AliyunReservedSSO-VPC-Admin
   */
  RAMRoleName?: string;
  /**
   * @remarks
   * The name of the Security Assertion Markup Language (SAML) identity provider (IdP) that is created within an account in the resource directory.
   * 
   * @example
   * AliyunReservedSSO-d-00fc2p61****
   */
  SAMLProviderName?: string;
  /**
   * @remarks
   * The status of the access configuration. Valid values:
   * 
   * *   Provisioned: The access configuration is provisioned.
   * *   ReprovisionRequired: The access configuration needs to be re-provisioned.
   * *   DeprovisionFailed: The access configuration failed to be provisioned.
   * 
   * @example
   * Provisioned
   */
  status?: string;
  /**
   * @remarks
   * The ID of the task object.
   * 
   * If the value of TargetType is `RD-Account`, the value of this parameter is the UID of an account in the resource directory.
   * 
   * @example
   * 101522521960****
   */
  targetId?: string;
  /**
   * @remarks
   * The name of the task object.
   * 
   * @example
   * SharedServices_5009****
   */
  targetName?: string;
  /**
   * @remarks
   * The path ID of the task object in the resource directory.
   */
  targetPath?: string;
  /**
   * @remarks
   * The path name of the task object in the resource directory.
   */
  targetPathName?: string;
  /**
   * @remarks
   * The type of the task object.
   * 
   * Set the value to RD-Account, which specifies the accounts in the resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  /**
   * @remarks
   * The last time when the access configuration was provisioned.
   * 
   * @example
   * 2021-07-26T08:54:18Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      accessConfigurationName: 'AccessConfigurationName',
      createTime: 'CreateTime',
      RAMPolicyNames: 'RAMPolicyNames',
      RAMRoleName: 'RAMRoleName',
      SAMLProviderName: 'SAMLProviderName',
      status: 'Status',
      targetId: 'TargetId',
      targetName: 'TargetName',
      targetPath: 'TargetPath',
      targetPathName: 'TargetPathName',
      targetType: 'TargetType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      accessConfigurationName: 'string',
      createTime: 'string',
      RAMPolicyNames: { 'type': 'array', 'itemType': 'string' },
      RAMRoleName: 'string',
      SAMLProviderName: 'string',
      status: 'string',
      targetId: 'string',
      targetName: 'string',
      targetPath: 'string',
      targetPathName: 'string',
      targetType: 'string',
      updateTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.RAMPolicyNames)) {
      $dara.Model.validateArray(this.RAMPolicyNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

