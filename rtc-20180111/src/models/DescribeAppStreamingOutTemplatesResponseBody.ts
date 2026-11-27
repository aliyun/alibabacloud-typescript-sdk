// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppStreamingOutTemplatesResponseBodyTemplates extends $dara.Model {
  /**
   * @remarks
   * Creation Time. Format: yyyy-MM-ddTHH:mm:ssZ (UTC).
   * 
   * @example
   * 2020-09-04T06:22:15Z
   */
  createTime?: string;
  /**
   * @remarks
   * List of layout IDs.
   */
  layoutIds?: string[];
  /**
   * @remarks
   * Encoding options.
   * 
   * @example
   * 1
   */
  mediaEncode?: number;
  /**
   * @remarks
   * Template Name.
   * 
   * @example
   * 模板名称
   */
  name?: string;
  /**
   * @remarks
   * Template ID.
   * 
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

export class DescribeAppStreamingOutTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * B0A2FCBC-43A4-428F-BC1D-3F4F85837F76
   */
  requestId?: string;
  /**
   * @remarks
   * List of templates.
   */
  templates?: DescribeAppStreamingOutTemplatesResponseBodyTemplates[];
  /**
   * @remarks
   * Number of records.
   * 
   * @example
   * 10
   */
  totalNum?: number;
  /**
   * @remarks
   * Number of pages.
   * 
   * @example
   * 1
   */
  totalPage?: number;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templates: 'Templates',
      totalNum: 'TotalNum',
      totalPage: 'TotalPage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templates: { 'type': 'array', 'itemType': DescribeAppStreamingOutTemplatesResponseBodyTemplates },
      totalNum: 'number',
      totalPage: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templates)) {
      $dara.Model.validateArray(this.templates);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

