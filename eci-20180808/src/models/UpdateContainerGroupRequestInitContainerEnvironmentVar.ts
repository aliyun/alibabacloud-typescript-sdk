// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateContainerGroupRequestInitContainerEnvironmentVarFieldRef } from "./UpdateContainerGroupRequestInitContainerEnvironmentVarFieldRef";


export class UpdateContainerGroupRequestInitContainerEnvironmentVar extends $dara.Model {
  fieldRef?: UpdateContainerGroupRequestInitContainerEnvironmentVarFieldRef;
  /**
   * @remarks
   * The name of the environment variable for the init container.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable for the init container.
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
      fieldRef: UpdateContainerGroupRequestInitContainerEnvironmentVarFieldRef,
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

