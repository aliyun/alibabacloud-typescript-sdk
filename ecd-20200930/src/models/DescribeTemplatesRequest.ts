// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeTemplatesRequest extends $dara.Model {
  /**
   * @example
   * cn-beijing
   */
  bizRegionId?: string;
  /**
   * @example
   * null
   */
  bizType?: string;
  /**
   * @example
   * m-dnz9xjgbm8*****
   */
  imageId?: string;
  /**
   * @example
   * abc
   */
  keyword?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @example
   * CloudDesktop
   */
  productType?: string;
  templateIds?: string[];
  templateName?: string;
  /**
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

