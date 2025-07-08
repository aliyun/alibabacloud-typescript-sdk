// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySmsTemplateByCodeNewResponseBodyMoreDataFileIds extends $dara.Model {
  moreDataFileId?: number[];
  static names(): { [key: string]: string } {
    return {
      moreDataFileId: 'MoreDataFileId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      moreDataFileId: { 'type': 'array', 'itemType': 'number' },
    };
  }

  validate() {
    if(Array.isArray(this.moreDataFileId)) {
      $dara.Model.validateArray(this.moreDataFileId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

