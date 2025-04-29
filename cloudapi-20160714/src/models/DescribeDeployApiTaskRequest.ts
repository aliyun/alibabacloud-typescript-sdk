// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDeployApiTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The task ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 51524fb8f12846d694d0a1de9a0cf274
   */
  operationUid?: string;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      operationUid: 'OperationUid',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      operationUid: 'string',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

