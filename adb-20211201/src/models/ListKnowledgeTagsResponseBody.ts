// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListKnowledgeTagsResponseBodyDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * key_name
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test_value
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

export class ListKnowledgeTagsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The location of the knowledge base file.
   * 
   * @example
   * oss://bucket/doc.pdf
   */
  fileLocation?: string;
  /**
   * @remarks
   * The prompt message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The list details.
   */
  tags?: ListKnowledgeTagsResponseBodyDataTags[];
  static names(): { [key: string]: string } {
    return {
      fileLocation: 'FileLocation',
      message: 'Message',
      success: 'Success',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileLocation: 'string',
      message: 'string',
      success: 'boolean',
      tags: { 'type': 'array', 'itemType': ListKnowledgeTagsResponseBodyDataTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListKnowledgeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListKnowledgeTagsResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListKnowledgeTagsResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

