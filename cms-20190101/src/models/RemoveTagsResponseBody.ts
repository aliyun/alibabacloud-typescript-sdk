// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RemoveTagsResponseBodyTag extends $dara.Model {
  tags?: string[];
  static names(): { [key: string]: string } {
    return {
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tags: { 'type': 'array', 'itemType': 'string' },
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

export class RemoveTagsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > The status code 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * Illegal parameters.
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 195390D2-69D0-4D9E-81AA-A7F5BC1B91EB
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The deleted tags.
   */
  tag?: RemoveTagsResponseBodyTag;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
      tag: RemoveTagsResponseBodyTag,
    };
  }

  validate() {
    if(this.tag && typeof (this.tag as any).validate === 'function') {
      (this.tag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

