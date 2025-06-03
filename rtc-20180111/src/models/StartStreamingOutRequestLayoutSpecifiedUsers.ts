// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartStreamingOutRequestLayoutSpecifiedUsers extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: string[];
  /**
   * @remarks
   * This parameter is required.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'string' },
      type: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ids)) {
      $dara.Model.validateArray(this.ids);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

