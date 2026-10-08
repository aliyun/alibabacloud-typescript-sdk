// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckDBNameAvailableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * >If only the request ID is returned, the database name is available. Otherwise, an error message is returned, indicating that the database name is duplicate or does not comply with naming conventions.
   * 
   * @example
   * 6EF82B07-28D2-48D1-B5D6-7E78FED277C7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

