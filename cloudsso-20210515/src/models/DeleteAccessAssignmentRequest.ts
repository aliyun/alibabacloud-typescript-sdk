// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAccessAssignmentRequest extends $dara.Model {
  /**
   * @remarks
   * The access configuration ID.
   * 
   * @example
   * ac-00jhtfl8thteu6uj****
   */
  accessConfigurationId?: string;
  /**
   * @remarks
   * Specifies whether to remove the access configuration deployment when you remove the last authorization that uses the access configuration on an account in a resource directory. Valid values:
   * 
   * - DeprovisionForLastAccessAssignmentOnAccount: Removes the access configuration deployment.
   * - None: Does not remove the access configuration deployment. This is the default value.
   * 
   * @example
   * None
   */
  deprovisionStrategy?: string;
  /**
   * @remarks
   * The directory ID.
   * 
   * @example
   * d-00fc2p61****
   */
  directoryId?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the authorization target.
   * 
   * @example
   * 114240524784****
   */
  originTargetId?: string;
  /**
   * @remarks
   * The CloudSSO identity ID. The value varies based on the principal type:
   * 
   * - If `PrincipalType` is `User`, `PrincipalId` is the CloudSSO user ID.
   * - If `PrincipalType` is `Group`, `PrincipalId` is the CloudSSO group ID.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The CloudSSO identity type. Valid values:
   * 
   * - User: user
   * - Group: group
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The target ID of the task.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The target type of the task. Valid values:
   * - RD-Account: The task target is an account in a resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
      deprovisionStrategy: 'DeprovisionStrategy',
      directoryId: 'DirectoryId',
      originTargetId: 'OriginTargetId',
      principalId: 'PrincipalId',
      principalType: 'PrincipalType',
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessConfigurationId: 'string',
      deprovisionStrategy: 'string',
      directoryId: 'string',
      originTargetId: 'string',
      principalId: 'string',
      principalType: 'string',
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

