// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateThreadRequest extends $dara.Model {
  attributes?: { [key: string]: string };
  /**
   * @example
   * active
   */
  status?: string;
  /**
   * @example
   * MY ANTOM Tech Team Annual Dinner Performance Lucky Draw
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      attributes: 'attributes',
      status: 'status',
      title: 'title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attributes: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      status: 'string',
      title: 'string',
    };
  }

  validate() {
    if(this.attributes) {
      $dara.Model.validateMap(this.attributes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

