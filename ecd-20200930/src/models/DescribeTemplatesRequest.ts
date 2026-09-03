// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * The region filter condition for template queries.
   * 
   * > If this parameter is specified, the query results exclude configurations for regions that do not match.
   * 
   * @example
   * cn-beijing
   */
  bizRegionId?: string;
  /**
   * @remarks
   * > This parameter is not publicly available.
   * 
   * @example
   * default
   */
  bizType?: string;
  /**
   * @remarks
   * The cloud computer image ID. You can obtain the ID from the image management page. System images and custom images are supported.
   * 
   * @example
   * m-dnz9xjgbm8*****
   */
  imageId?: string;
  /**
   * @remarks
   * The keyword. Fuzzy match is supported for the template ID and template name fields.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * The page number of the current page in a paged query. Paging starts from page 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The maximum number of rows per page in a paged query. Paging is used to return results in batches.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The product type. Set this parameter to `CloudDesktop`.
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * The list of template IDs to query.
   * 
   * @example
   * DescribeTemplates
   */
  templateIds?: string[];
  /**
   * @remarks
   * The template name used for the query.
   * 
   * @example
   * MyCloudComputerTemplate001
   */
  templateName?: string;
  /**
   * @remarks
   * The templatetype to query. If this parameter is not specified, templates of all types are queried.
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

