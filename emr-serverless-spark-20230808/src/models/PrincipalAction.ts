// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrincipalAction extends $dara.Model {
  /**
   * @remarks
   * The ARN of the behavior.
   * 
   * @example
   * acs:emr::workspaceId:action/create_queue
   */
  actionArn?: string;
  /**
   * @remarks
   * The ARN of the principal.
   * 
   * @example
   * acs:emr::workspaceId:user/23759369154162****
   */
  principalArn?: string;
  static names(): { [key: string]: string } {
    return {
      actionArn: 'actionArn',
      principalArn: 'principalArn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionArn: 'string',
      principalArn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

