// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpdateVpcInfoTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 7d341787517a47afaaef9cc1bdb7acce
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

