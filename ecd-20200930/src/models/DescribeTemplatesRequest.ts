// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesRequest extends $dara.Model {
  /**
   * @remarks
   * Region filter for template queries.
   * 
   * > If you set this parameter, results exclude configurations for other regions.
   * 
   * @example
   * cn-beijing
   */
  bizRegionId?: string;
  /**
   * @remarks
   * > This parameter is not available for public use.
   * 
   * @example
   * null
   */
  bizType?: string;
  /**
   * @remarks
   * Cloud Desktop image ID. You can find this ID on the Image Management page. Supported image types include OS images and custom images.
   * 
   * @example
   * m-dnz9xjgbm8*****
   */
  imageId?: string;
  /**
   * @remarks
   * Keyword for fuzzy search. Searches template IDs and template names.
   * 
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @remarks
   * Page number for paged queries.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * Maximum number of entries per page for paged queries.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * Product type. Set this parameter to `CloudDesktop`.
   * 
   * @example
   * CloudDesktop
   */
  productType?: string;
  /**
   * @remarks
   * List of template IDs to query.
   */
  templateIds?: string[];
  /**
   * @remarks
   * Query by template name.
   * 
   * @example
   * My cloud desktop template 001
   */
  templateName?: string;
  /**
   * @remarks
   * Template type to query. If you omit this parameter, the system returns all template types.
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

