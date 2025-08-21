// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLgfResponseBody extends $dara.Model {
  /**
   * @remarks
   * LGF ID
   * 
   * @example
   * 2342424
   */
  lgfId?: number;
  /**
   * @example
   * dgw2342424qw42
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

