// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request
   * 
   * @example
   * 9E5BCFAA-98B3-51D0-9188-B1BC07589337
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
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

