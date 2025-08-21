// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLgfResponseBody extends $dara.Model {
  /**
   * @remarks
   * LGF ID
   * 
   * @example
   * 123453433453
   */
  lgfId?: number;
  /**
   * @example
   * af5fg3sdf457j5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      lgfId: 'LgfId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lgfId: 'number',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

