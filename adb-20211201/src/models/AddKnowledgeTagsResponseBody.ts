// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddKnowledgeTagsResponseBodyDataSkipped extends $dara.Model {
  /**
   * @remarks
   * The reason why the tag was skipped.
   * 
   * @example
   * conflict
   */
  reason?: string;
  /**
   * @remarks
   * The key of the tag.
   * 
   * @example
   * skipKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The value of the tag.
   * 
   * @example
   * skipValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      reason: 'Reason',
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reason: 'string',
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

export class AddKnowledgeTagsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The location of the knowledge base file.
   * 
   * @example
   * oss://bucketName/path/to/file.pdf
   */
  fileLocation?: string;
  /**
   * @remarks
   * The message.
   * 
   * @example
   * 1 tag skipped
   */
  message?: string;
  /**
   * @remarks
   * The number of tags that were successfully updated.
   * 
   * @example
   * 1
   */
  replaced?: number;
  /**
   * @remarks
   * The list of skipped tags.
   */
  skipped?: AddKnowledgeTagsResponseBodyDataSkipped[];
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * - **true**: The request was successful.
   * - **false**: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The number of tags that were successfully added.
   * 
   * @example
   * 2
   */
  written?: number;
  static names(): { [key: string]: string } {
    return {
      fileLocation: 'FileLocation',
      message: 'Message',
      replaced: 'Replaced',
      skipped: 'Skipped',
      success: 'Success',
      written: 'Written',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileLocation: 'string',
      message: 'string',
      replaced: 'number',
      skipped: { 'type': 'array', 'itemType': AddKnowledgeTagsResponseBodyDataSkipped },
      success: 'boolean',
      written: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.skipped)) {
      $dara.Model.validateArray(this.skipped);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddKnowledgeTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: AddKnowledgeTagsResponseBodyData;
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
      data: AddKnowledgeTagsResponseBodyData,
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

