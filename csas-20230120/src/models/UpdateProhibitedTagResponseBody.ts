// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProhibitedTagResponseBodyTag extends $dara.Model {
  /**
   * @remarks
   * The creation time of the prohibited software tag, in the yyyy-MM-dd HH:mm:ss format. The time is displayed in UTC+8.
   * 
   * @example
   * 2025-09-05 10:20:46
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the prohibited software tag.
   * 
   * @example
   * test constraints
   */
  description?: string;
  /**
   * @remarks
   * The name of the prohibited software tag.
   * 
   * @example
   * PolicyC
   */
  name?: string;
  /**
   * @remarks
   * The ID of the prohibited software tag.
   * 
   * @example
   * tag-d730092d87ec****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateProhibitedTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1D3BCF94-7F83-559E-82D9-C891BBB32FC0
   */
  requestId?: string;
  /**
   * @remarks
   * The prohibited software tag.
   */
  tag?: UpdateProhibitedTagResponseBodyTag;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tag: UpdateProhibitedTagResponseBodyTag,
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

