// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTestCaseFieldsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  spaceIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      spaceIdentifier: 'spaceIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

