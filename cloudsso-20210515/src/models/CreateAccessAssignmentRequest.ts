// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAccessAssignmentRequest extends $dara.Model {
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
   * The CloudSSO identity ID. Details:
   * - If PrincipalType is set to User, PrincipalId is the CloudSSO user ID.
   * - If PrincipalType is set to Group, PrincipalId is the CloudSSO group ID.
   * 
   * @example
   * u-00q8wbq42wiltcrk****
   */
  principalId?: string;
  /**
   * @remarks
   * The CloudSSO identity type. Valid values:
   * - User: user
   * - Group: group
   * 
   * @example
   * User
   */
  principalType?: string;
  /**
   * @remarks
   * The ID of the deployment target.
   * 
   * @example
   * 114240524784****
   */
  targetId?: string;
  /**
   * @remarks
   * The target type of the task. Valid value: RD-Account, which indicates that the task target is an account in a resource directory.
   * 
   * @example
   * RD-Account
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      accessConfigurationId: 'AccessConfigurationId',
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

