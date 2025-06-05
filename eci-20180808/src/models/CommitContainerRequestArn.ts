// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitContainerRequestArn extends $dara.Model {
  /**
   * @remarks
   * The ARN of the authorized role.
   * 
   * @example
   * acs:ram:xxx
   */
  roleArn?: string;
  /**
   * @remarks
   * The authorization type. A value of service indicates that RAM roles are used for authorization.
   * 
   * @example
   * user
   */
  roleType?: string;
  static names(): { [key: string]: string } {
    return {
      roleArn: 'RoleArn',
      roleType: 'RoleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleArn: 'string',
      roleType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

