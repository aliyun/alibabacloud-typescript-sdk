// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveOrgResponseBody extends $dara.Model {
  /**
   * @example
   * 6C352609-EE7F-5603-B5E6-57C3EDDD****
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

