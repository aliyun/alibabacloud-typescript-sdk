// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The region that you can use to filter templates.
   * 
   * >  If you specify this parameter, only templates that are created in the specified region are returned.
   * 
   * @example
   * cn-beijing
   */
  bizRegionId?: string;
  /**
   * @remarks
   * >  This parameter is not publicly available.
   * 
   * @example
   * null
   */
  bizType?: string;
  /**
   * @remarks
   * The ID of the cloud computer image. You can query image IDs on the Images page. System images and custom images are supported.
   * 
   * @example
   * m-dnz9xjgbm8*****
   */
  imageId?: string;
  /**
   * @remarks
   * The keyword that you can use to search for the template. It can be the template ID or the template name. Fuzzy search is supported.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The service type. Set the value to `CloudDesktop`.
   * 
   * *
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The IDs of the templates that you want to query.
   */
  templateIds?: string[];
  /**
   * @remarks
   * The name of the template. You can search for template by name.
   */
  templateName?: string;
  /**
   * @remarks
   * The type of the template that you want to query. If you leave this parameter empty, all types of templates are queried.
   * 
   * Valid values:
   * 
   * *   USER_TEMPLATE: custom templates.
   * *   SYSTEM_TEMPLATE: system templates provided by Alibaba Cloud.
   * 
   * @example
   * USER_TEMPLATE
   */
  templateType?: string;
  static names(): { [key: string]: string } {
    return {
      bizRegionId: 'BizRegionId',
      bizType: 'BizType',
      imageId: 'ImageId',
      keyword: 'Keyword',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      productType: 'ProductType',
      templateIds: 'TemplateIds',
      templateName: 'TemplateName',
      templateType: 'TemplateType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizRegionId: 'string',
      bizType: 'string',
      imageId: 'string',
      keyword: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      productType: 'string',
      templateIds: { 'type': 'array', 'itemType': 'string' },
      templateName: 'string',
      templateType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateIds)) {
      $dara.Model.validateArray(this.templateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

