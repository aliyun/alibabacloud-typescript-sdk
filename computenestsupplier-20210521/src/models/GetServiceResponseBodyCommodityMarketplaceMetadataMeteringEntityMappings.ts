// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyCommodityMarketplaceMetadataMeteringEntityMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the billable item.
   * 
   * @example
   * cmgjxxxxxxxx-NetworkOut-2
   */
  entityIds?: string;
  /**
   * @remarks
   * The name of the specification package.
   * 
   * @example
   * Pay-as-you-go Package
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
  static names(): { [key: string]: string } {
    return {
      entityIds: 'EntityIds',
      specificationName: 'SpecificationName',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityIds: 'string',
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

