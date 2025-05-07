// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateConfigMapResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   * 
   * @example
   * 1
   */
  configMapId?: number;
  static names(): { [key: string]: string } {
    return {
      configMapId: 'ConfigMapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMapId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

