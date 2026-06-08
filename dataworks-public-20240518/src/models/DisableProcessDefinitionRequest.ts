// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableProcessDefinitionRequest extends $dara.Model {
  /**
   * @example
   * 1AFAE64E-D1BE-432B-A9*****
   */
  clientToken?: string;
  /**
   * @example
   * 11792
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

