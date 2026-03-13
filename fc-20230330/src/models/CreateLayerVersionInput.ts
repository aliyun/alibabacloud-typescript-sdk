// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { InputCodeLocation } from "./InputCodeLocation";


export class CreateLayerVersionInput extends $dara.Model {
  /**
   * @remarks
   * The code information of the layer.
   */
  code?: InputCodeLocation;
  /**
   * @remarks
   * The runtimes that are supported by the layer.
   */
  compatibleRuntime?: string[];
  /**
   * @remarks
   * The description of the layer version.
   * 
   * @example
   * my first layer
   */
  description?: string;
  /**
   * @remarks
   * The license agreement for the layer.
   * 
   * @example
   * Apache
   */
  license?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      compatibleRuntime: 'compatibleRuntime',
      description: 'description',
      license: 'license',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: InputCodeLocation,
      compatibleRuntime: { 'type': 'array', 'itemType': 'string' },
      description: 'string',
      license: 'string',
    };
  }

  validate() {
    if(this.code && typeof (this.code as any).validate === 'function') {
      (this.code as any).validate();
    }
    if(Array.isArray(this.compatibleRuntime)) {
      $dara.Model.validateArray(this.compatibleRuntime);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

