// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetArEditUgcMaterialRequest extends $dara.Model {
  jwtToken?: string;
  mapId?: number;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      mapId: 'MapId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      mapId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

