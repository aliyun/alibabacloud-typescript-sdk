// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeUpdateBackendTaskRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 4e13c3e0c44c4a4ebb5231264eeb9bc1
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

