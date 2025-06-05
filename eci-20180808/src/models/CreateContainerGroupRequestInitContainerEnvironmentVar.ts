// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateContainerGroupRequestInitContainerEnvironmentVarFieldRef } from "./CreateContainerGroupRequestInitContainerEnvironmentVarFieldRef";


export class CreateContainerGroupRequestInitContainerEnvironmentVar extends $dara.Model {
  fieldRef?: CreateContainerGroupRequestInitContainerEnvironmentVarFieldRef;
  /**
   * @remarks
   * The name of the environment variable. The name must be 1 to 128 bits in length and can contain letters, digits, and underscores (_). It cannot start with a digit.``
   * 
   * @example
   * Path
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable. The value must be 0 to 256 bits in length.
   * 
   * @example
   * /usr/bin/
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
      fieldRef: CreateContainerGroupRequestInitContainerEnvironmentVarFieldRef,
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

