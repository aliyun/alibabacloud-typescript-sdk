// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateResponseBodyDataTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The time when the template was created.
   * 
   * @example
   * 2021-03-18 16:41:31
   */
  createTime?: string;
  description?: string;
  documentUrl?: string;
  /**
   * @remarks
   * The URL of the architecture image.
   * 
   * @example
   * bp-studio-template/sr-U37UD2YQCRJ75X5V.png
   */
  imageURL?: string;
  /**
   * @remarks
   * The name of the template.
   * 
   * @example
   * cadt-name
   */
  name?: string;
  /**
   * @remarks
   * The ID of the resource group.
   * 
   * @example
   * rg-acfmyjt3c5om3hi
   */
  resourceGroupId?: string;
  tag?: ListTemplateResponseBodyDataTag[];
  /**
   * @remarks
   * The ID of the tag that is added to the template.
   * 
   * @example
   * 1
   * 
   * @deprecated
   */
  tagId?: number;
  /**
   * @remarks
   * The name of the tag that is added to the template.
   * 
   * @example
   * Official template
   * 
   * @deprecated
   */
  tagName?: string;
  /**
   * @remarks
   * The ID of the template.
   * 
   * @example
   * CJQ6H0XUEQ20IYJQ
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      documentUrl: 'DocumentUrl',
      imageURL: 'ImageURL',
      name: 'Name',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
      tagId: 'TagId',
      tagName: 'TagName',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      documentUrl: 'string',
      imageURL: 'string',
      name: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': ListTemplateResponseBodyDataTag },
      tagId: 'number',
      tagName: 'string',
      templateId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The details about templates.
   */
  data?: ListTemplateResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  nextToken?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A07FFDF2-78FA-1B48-9E38-88E833A93187
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListTemplateResponseBodyData },
      message: 'string',
      nextToken: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

