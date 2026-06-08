// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteProcessDefinitionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * f0d6d578-a305-40ac-ba1e-0a09f64cbc69
   */
  id?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

