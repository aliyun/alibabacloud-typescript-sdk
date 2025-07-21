// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListResourceTagsResponseBodyTagsTag extends $dara.Model {
  /**
   * @remarks
   * The globally unique ID of the CMK.
   * 
   * @example
   * 33caea95-c3e5-4b3e-a9c6-cec76e4e****
   */
  keyId?: string;
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * Project
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * Test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      keyId: 'KeyId',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      keyId: 'string',
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBodyTags extends $dara.Model {
  tag?: ListResourceTagsResponseBodyTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': ListResourceTagsResponseBodyTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListResourceTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 4162a6af-bc99-40b3-a552-89dcc8aaf7c8
   */
  requestId?: string;
  /**
   * @remarks
   * The tags of the CMK.
   */
  tags?: ListResourceTagsResponseBodyTags;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tags: ListResourceTagsResponseBodyTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

