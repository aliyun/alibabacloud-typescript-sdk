// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCenResponseBody extends $dara.Model {
  /**
   * @remarks
   * The CEN instance ID.
   * 
   * @example
   * cen-dc4vwznpwbobrl****
   */
  cenId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C2EE7A8-74D4-4081-8236-CEBDE3BBCF50
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
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

