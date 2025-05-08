// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequestCommoditySpecificationMappings extends $dara.Model {
  /**
   * @remarks
   * Specification code.
   * 
   * @example
   * yuncode5767800001
   */
  specificationCode?: string;
  /**
   * @remarks
   * The name of the package specification.
   * 
   * @example
   * Type, value：
   * 
   * * **Custom**
   * * **ComputeNestBill**
   * * **ComputeNestPrometheus**
   * * **ComputeNestTime**
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * Product Specifications and Template/specification mapping Relationships (Cloud Marketplace - Subscription/Permanent Use)
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

