// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProhibitedTagResponseBodyTag extends $dara.Model {
  /**
   * @remarks
   * The time when the disabled software tag was created, in the yyyy-MM-dd HH:mm:ss format. The time is displayed in UTC+8.
   * 
   * @example
   * 2026-08-19 10:24:31
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the disabled software tag.
   * 
   * @example
   * test template create get delete
   */
  description?: string;
  /**
   * @remarks
   * The name of the disabled software tag.
   * 
   * @example
   * autotest_37bf6a18
   */
  name?: string;
  /**
   * @remarks
   * The ID of the disabled software tag.
   * 
   * @example
   * tag-4a4046838f77****
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

export class CreateProhibitedTagResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * C7F30ABA-67BD-537D-A516-8DA20DA1F28C
   */
  requestId?: string;
  /**
   * @remarks
   * The disabled software tag.
   */
  tag?: CreateProhibitedTagResponseBodyTag;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      tag: CreateProhibitedTagResponseBodyTag,
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

