// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachProjectManagersToProjectAuthorizationRequestPrincipals extends $dara.Model {
  /**
   * @remarks
   * When PrincipalType is set to RamUser, specify the ID of the RAM user to be designated as the project administrator. When PrincipalType is set to RamRole, specify the ARN of the RAM role to be designated as the project administrator.
   * 
   * @example
   * 160****2519
   */
  principalId?: string;
  /**
   * @remarks
   * The display name of the RAM user or RAM role designated as the project administrator.
   * 
   * @example
   * name
   */
  principalName?: string;
  /**
   * @remarks
   * The type of the project administrator. Valid values:
   * 
   * - **RamUser**: Resource Access Management (RAM) user.
   * 
   * - **RamRole**: RAM role.
   * 
   * @example
   * RamUser
   */
  principalType?: string;
  static names(): { [key: string]: string } {
    return {
      principalId: 'PrincipalId',
      principalName: 'PrincipalName',
      principalType: 'PrincipalType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      principalId: 'string',
      principalName: 'string',
      principalType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AttachProjectManagersToProjectAuthorizationRequest extends $dara.Model {
  /**
   * @remarks
   * The project authorization ID.
   * > You can call the ListProjectAuthorizations operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 2
   */
  authorizationId?: number;
  /**
   * @remarks
   * The instance ID of the bastion host.
   * > You can invoke the [DescribeInstances](https://help.aliyun.com/document_detail/153281.html) operation to query this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * bastionhost-cn-st220aw****
   */
  instanceId?: string;
  /**
   * @remarks
   * The information about the project administrators specified in the project authorization.
   */
  principals?: AttachProjectManagersToProjectAuthorizationRequestPrincipals[];
  /**
   * @remarks
   * The region ID of the bastion host.
   * > For the mapping between region IDs and region names, see [Regions and zones](https://help.aliyun.com/document_detail/40654.html).
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      authorizationId: 'AuthorizationId',
      instanceId: 'InstanceId',
      principals: 'Principals',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authorizationId: 'number',
      instanceId: 'string',
      principals: { 'type': 'array', 'itemType': AttachProjectManagersToProjectAuthorizationRequestPrincipals },
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.principals)) {
      $dara.Model.validateArray(this.principals);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

