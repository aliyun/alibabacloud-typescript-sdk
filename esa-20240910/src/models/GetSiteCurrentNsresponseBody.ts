// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSiteCurrentNSResponseBody extends $dara.Model {
  NSList?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      NSList: 'NSList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      NSList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.NSList)) {
      $dara.Model.validateArray(this.NSList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

