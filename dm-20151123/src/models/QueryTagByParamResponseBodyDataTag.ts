// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTagByParamResponseBodyDataTag extends $dara.Model {
  /**
   * @remarks
   * Tag description
   * 
   * @example
   * test description
   */
  tagDescription?: string;
  /**
   * @remarks
   * Tag ID
   * 
   * @example
   * 52366
   */
  tagId?: string;
  /**
   * @remarks
   * Tag name
   * 
   * @example
   * hellopal
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      tagDescription: 'TagDescription',
      tagId: 'TagId',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagDescription: 'string',
      tagId: 'string',
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

