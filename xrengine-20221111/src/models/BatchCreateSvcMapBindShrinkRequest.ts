// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchCreateSvcMapBindShrinkRequest extends $dara.Model {
  jwtToken?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  mapIdsShrink?: string;
  svcId?: number;
  static names(): { [key: string]: string } {
    return {
      jwtToken: 'JwtToken',
      mapIdsShrink: 'MapIds',
      svcId: 'SvcId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      jwtToken: 'string',
      mapIdsShrink: 'string',
      svcId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

