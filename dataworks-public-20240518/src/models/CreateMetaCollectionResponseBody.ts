// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateMetaCollectionResponseBody extends $dara.Model {
  /**
   * @example
   * category.123
   */
  id?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * E6F0DBDD-5AD****
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
      id: 'string',
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

