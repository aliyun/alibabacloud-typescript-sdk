// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryDSRecordResponseBodyDSRecordList extends $dara.Model {
  /**
   * @example
   * 1
   */
  algorithm?: number;
  /**
   * @example
   * f58fa917424383934c7b0cf1a90f61d692745680fa06f5ecdbe0924e86de9598
   */
  digest?: string;
  /**
   * @example
   * 2
   */
  digestType?: number;
  /**
   * @example
   * 1
   */
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
  /**
   * @example
   * 814B2AF0-ED6F-4C13-B41C-8AC0B1023583
   */
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

