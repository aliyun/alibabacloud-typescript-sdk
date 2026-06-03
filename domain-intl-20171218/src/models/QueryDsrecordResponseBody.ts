// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDSRecordResponseBodyDSRecordList extends $dara.Model {
  algorithm?: number;
  digest?: string;
  digestType?: number;
  keyTag?: number;
  static names(): { [key: string]: string } {
    return {
      algorithm: 'Algorithm',
      digest: 'Digest',
      digestType: 'DigestType',
      keyTag: 'KeyTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      algorithm: 'number',
      digest: 'string',
      digestType: 'number',
      keyTag: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryDSRecordResponseBody extends $dara.Model {
  DSRecordList?: QueryDSRecordResponseBodyDSRecordList[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DSRecordList: 'DSRecordList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DSRecordList: { 'type': 'array', 'itemType': QueryDSRecordResponseBodyDSRecordList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.DSRecordList)) {
      $dara.Model.validateArray(this.DSRecordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

