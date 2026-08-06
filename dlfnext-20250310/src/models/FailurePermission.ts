// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Permission } from "./Permission";


export class FailurePermission extends $dara.Model {
  /**
   * @remarks
   * The error code.
   * 
   * @example
   * 空
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * 空
   */
  errorMessage?: string;
  /**
   * @remarks
   * The permission information.
   */
  permission?: Permission;
  static names(): { [key: string]: string } {
    return {
      errorCode: 'errorCode',
      errorMessage: 'errorMessage',
      permission: 'permission',
    };
  }

  static types(): { [key: string]: any } {
    return {
      errorCode: 'string',
      errorMessage: 'string',
      permission: Permission,
    };
  }

  validate() {
    if(this.permission && typeof (this.permission as any).validate === 'function') {
      (this.permission as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

