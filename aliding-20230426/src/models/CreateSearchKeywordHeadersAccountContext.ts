// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSearchKeywordHeadersAccountContext extends $dara.Model {
  /**
   * @example
   * ba3a9b612345678d8fedf544ef69d19e
   */
  userToken?: string;
  static names(): { [key: string]: string } {
    return {
      userToken: 'userToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      userToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

