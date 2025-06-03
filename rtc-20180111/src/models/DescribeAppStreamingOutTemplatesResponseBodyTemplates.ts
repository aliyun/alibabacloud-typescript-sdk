// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppStreamingOutTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  layoutIds?: string[];
  /**
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @example
   * 模版名称
   */
  name?: string;
  /**
   * @example
   * Bj6D****
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      layoutIds: 'LayoutIds',
      mediaEncode: 'MediaEncode',
      name: 'Name',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      layoutIds: { 'type': 'array', 'itemType': 'string' },
      mediaEncode: 'number',
      name: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.layoutIds)) {
      $dara.Model.validateArray(this.layoutIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

