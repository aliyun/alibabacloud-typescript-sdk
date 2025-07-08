// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateByCodeNewResponseBodyMoreDataOssKeys extends $dara.Model {
  moreDataOssKey?: string[];
  static names(): { [key: string]: string } {
    return {
      moreDataOssKey: 'MoreDataOssKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moreDataOssKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.moreDataOssKey)) {
      $dara.Model.validateArray(this.moreDataOssKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

