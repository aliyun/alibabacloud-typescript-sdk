// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBatchRequestActions extends $dara.Model {
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * doc/convert
   */
  name?: string;
  /**
   * @remarks
   * The template parameters.
   */
  parameters?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      parameters: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

