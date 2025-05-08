// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyCommodityMarketplaceMetadataSpecificationMappings extends $dara.Model {
  /**
   * @remarks
   * The specification code of the service in Alibaba Cloud Marketplace.
   * 
   * @example
   * cmjj00xxxx
   */
  specificationCode?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * Pay-as-you-go
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Template 1
   */
  templateName?: string;
  /**
   * @remarks
   * The trial policy. Valid values:
   * 
   * *   Trial: Trials are supported.
   * *   NotTrial: Trials are not supported.
   * 
   * @example
   * NotTrial
   */
  trialType?: string;
  static names(): { [key: string]: string } {
    return {
      specificationCode: 'SpecificationCode',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
      trialType: 'TrialType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      specificationCode: 'string',
      specificationName: 'string',
      templateName: 'string',
      trialType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

