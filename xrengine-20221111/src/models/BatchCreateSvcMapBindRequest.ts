// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateSvcMapBindRequest extends $dara.Model {
  jwtToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mapIds?: number[];
  svcId?: number;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      mapIds: 'MapIds',
      svcId: 'SvcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      mapIds: { 'type': 'array', 'itemType': 'number' },
      svcId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.mapIds)) {
      $dara.Model.validateArray(this.mapIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

