// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCustomFieldOptionRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * e8bxxxxxxxxxxxxxxxx23
   */
  spaceIdentifier?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * Project
   */
  spaceType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 9uyxxxx1re573f561dxxxxx
   */
  workitemTypeIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      spaceIdentifier: 'spaceIdentifier',
      spaceType: 'spaceType',
      workitemTypeIdentifier: 'workitemTypeIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      spaceIdentifier: 'string',
      spaceType: 'string',
      workitemTypeIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

