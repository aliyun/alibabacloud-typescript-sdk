// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyPublicUrlIpListRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: { [key: string]: string };
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
    };
  }

  validate() {
    if(this.body) {
      $dara.Model.validateMap(this.body);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

