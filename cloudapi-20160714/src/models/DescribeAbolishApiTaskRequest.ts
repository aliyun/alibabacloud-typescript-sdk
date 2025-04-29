// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAbolishApiTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the unpublishing operation.
   * 
   * This parameter is required.
   * 
   * @example
   * fc54****dd4c4***ad7edd7****39401
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

