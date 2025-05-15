// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings extends $dara.Model {
  /**
   * @remarks
   * The specification code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00****
   */
  specificationCode?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Package one.
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template one.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationCode: 'string',
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

