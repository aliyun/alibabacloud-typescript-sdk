// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagsResponseBodyTagInfosTagInfo extends $dara.Model {
  /**
   * @example
   * test_tag2
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponseBodyTagInfos extends $dara.Model {
  tagInfo?: QueryTagsResponseBodyTagInfosTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': QueryTagsResponseBodyTagInfosTagInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryTagsResponseBody extends $dara.Model {
  /**
   * @example
   * D68AE5C6-8AAF-46C9-B627-3FDACD1A4168
   */
  requestId?: string;
  tagInfos?: QueryTagsResponseBodyTagInfos;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tagInfos: 'TagInfos',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tagInfos: QueryTagsResponseBodyTagInfos,
    };
  }

  validate() {
    if(this.tagInfos && typeof (this.tagInfos as any).validate === 'function') {
      (this.tagInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

