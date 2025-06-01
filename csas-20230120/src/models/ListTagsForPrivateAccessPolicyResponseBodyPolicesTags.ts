// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTagsForPrivateAccessPolicyResponseBodyPolicesTags extends $dara.Model {
  /**
   * @remarks
   * 内网访问标签创建时间。
   * 
   * @example
   * 2023-02-21 14:10:16
   */
  createTime?: string;
  description?: string;
  /**
   * @example
   * tag_name
   */
  name?: string;
  /**
   * @example
   * tag-d3f64e8bdd4a****
   */
  tagId?: string;
  /**
   * @example
   * Default
   */
  tagType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      name: 'Name',
      tagId: 'TagId',
      tagType: 'TagType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      name: 'string',
      tagId: 'string',
      tagType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

