// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModelGroupClientKeyItemDTO extends $dara.Model {
  /**
   * @example
   * 501
   */
  id?: number;
  /**
   * @example
   * sk-ab****yz
   */
  keyPreview?: string;
  /**
   * @example
   * Default Key
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

