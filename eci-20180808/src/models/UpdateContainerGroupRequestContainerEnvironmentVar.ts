// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { UpdateContainerGroupRequestContainerEnvironmentVarFieldRef } from "./UpdateContainerGroupRequestContainerEnvironmentVarFieldRef";


export class UpdateContainerGroupRequestContainerEnvironmentVar extends $dara.Model {
  fieldRef?: UpdateContainerGroupRequestContainerEnvironmentVarFieldRef;
  /**
   * @remarks
   * The name of the environment variable for the container.
   * 
   * @example
   * PATH
   */
  key?: string;
  /**
   * @remarks
   * The value of the environment variable for the container.
   * 
   * @example
   * /usr/bin/local/
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
      fieldRef: UpdateContainerGroupRequestContainerEnvironmentVarFieldRef,
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

