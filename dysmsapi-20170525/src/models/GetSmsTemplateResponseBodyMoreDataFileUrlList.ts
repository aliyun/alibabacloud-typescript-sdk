// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSmsTemplateResponseBodyMoreDataFileUrlList extends $dara.Model {
  moreDataFileUrl?: string[];
  static names(): { [key: string]: string } {
    return {
      moreDataFileUrl: 'MoreDataFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moreDataFileUrl: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.moreDataFileUrl)) {
      $dara.Model.validateArray(this.moreDataFileUrl);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

