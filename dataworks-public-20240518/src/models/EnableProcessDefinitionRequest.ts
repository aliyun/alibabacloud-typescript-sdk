// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableProcessDefinitionRequest extends $dara.Model {
  /**
   * @example
   * 1AFAE64E-D1BE-432B-A9****
   */
  clientToken?: string;
  /**
   * @example
   * f0d6d578-a305-40ac-ba1e-0a09f64cbc69
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      clientToken: 'ClientToken',
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientToken: 'string',
      id: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

