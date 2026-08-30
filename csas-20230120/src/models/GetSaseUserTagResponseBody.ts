// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSaseUserTagResponseBodySaseUserTag extends $dara.Model {
  /**
   * @remarks
   * The Alibaba Cloud account ID.
   * 
   * @example
   * 141681795035****
   */
  aliuid?: string;
  /**
   * @remarks
   * The user tag description.
   * 
   * @example
   * These are the company\\"s employees
   */
  description?: string;
  /**
   * @remarks
   * The user tag name.
   * 
   * @example
   * boss
   */
  name?: string;
  /**
   * @remarks
   * The user tag ID.
   * 
   * @example
   * su-tag-1ae52f66039fa0d4****
   */
  tagId?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'string',
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

export class GetSaseUserTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 2CABFEBB-0CE7-575E-833A-266F75D46713
   */
  requestId?: string;
  /**
   * @remarks
   * The user tag response body.
   */
  saseUserTag?: GetSaseUserTagResponseBodySaseUserTag;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      saseUserTag: 'SaseUserTag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      saseUserTag: GetSaseUserTagResponseBodySaseUserTag,
    };
  }

  validate() {
    if(this.saseUserTag && typeof (this.saseUserTag as any).validate === 'function') {
      (this.saseUserTag as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

