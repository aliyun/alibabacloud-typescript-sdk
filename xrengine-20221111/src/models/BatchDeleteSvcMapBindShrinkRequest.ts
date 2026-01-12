// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchDeleteSvcMapBindShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  idsShrink?: string;
  jwtToken?: string;
  static names(): { [key: string]: string } {
    return {
      idsShrink: 'Ids',
      jwtToken: 'JwtToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      idsShrink: 'string',
      jwtToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

