// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSkillBizTagsRequestBody extends $dara.Model {
  /**
   * @remarks
   * The business tags as a JSON array string.
   * 
   * This parameter is required.
   * 
   * @example
   * ["cs","qa","support"]
   */
  bizTags?: string;
  static names(): { [key: string]: string } {
    return {
      bizTags: 'bizTags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateSkillBizTagsRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: UpdateSkillBizTagsRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: UpdateSkillBizTagsRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

