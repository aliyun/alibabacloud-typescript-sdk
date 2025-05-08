// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateOriginPoolResponseBody extends $dara.Model {
  /**
   * @remarks
   * Source address pool ID.
   * 
   * @example
   * 1038520525196928
   */
  id?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 15C66C7B-671A-4297-9187-2C4477247A74
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
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

