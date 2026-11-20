// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelGroupClientKeyItemDTO extends $dara.Model {
  /**
   * @remarks
   * The numeric ID of the API key.
   * 
   * @example
   * 501
   */
  id?: number;
  /**
   * @remarks
   * The masked preview of the API key.
   * 
   * @example
   * sk-ab****yz
   */
  keyPreview?: string;
  /**
   * @remarks
   * The authorization name (derived from the API key name).
   * 
   * @example
   * Default key
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      keyPreview: 'keyPreview',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      keyPreview: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

