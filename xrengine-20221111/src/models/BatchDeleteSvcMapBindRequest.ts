// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteSvcMapBindRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  ids?: number[];
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      ids: 'Ids',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: { 'type': 'array', 'itemType': 'number' },
      jwtToken: 'string',
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

