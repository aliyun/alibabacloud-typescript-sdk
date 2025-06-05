// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestContainerEnvironmentVarFieldRef } from "./CreateContainerGroupRequestContainerEnvironmentVarFieldRef";


export class CreateContainerGroupRequestContainerEnvironmentVar extends $dara.Model {
  fieldRef?: CreateContainerGroupRequestContainerEnvironmentVarFieldRef;
  /**
   * @remarks
   * The name of the environment variable. The name must be 1 to 128 characters in length and can contain letters, digits, and underscores (_). It cannot start with a digit.``
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value can be up to 256 characters in length.
   * 
   * @example
   * /usr/local/bin
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      fieldRef: 'FieldRef',
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fieldRef: CreateContainerGroupRequestContainerEnvironmentVarFieldRef,
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    if(this.fieldRef && typeof (this.fieldRef as any).validate === 'function') {
      (this.fieldRef as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

