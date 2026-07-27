// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateThreadRequest extends $dara.Model {
  /**
   * @remarks
   * The attributes of the thread.
   */
  attributes?: { [key: string]: string };
  /**
   * @remarks
   * The status of the thread.
   * 
   * @example
   * active
   */
  status?: string;
  /**
   * @remarks
   * The title of the thread.
   * 
   * @example
   * title
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

