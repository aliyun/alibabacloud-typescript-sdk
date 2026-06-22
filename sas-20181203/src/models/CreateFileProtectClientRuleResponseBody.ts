// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateFileProtectClientRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The policy ID.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * ACF97412-FD09-4D1F-994F-34DF12BREF20
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

