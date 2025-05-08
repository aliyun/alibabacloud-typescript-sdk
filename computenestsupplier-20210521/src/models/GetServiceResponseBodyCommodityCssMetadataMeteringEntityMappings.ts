// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetServiceResponseBodyCommodityCssMetadataMeteringEntityMappings extends $dara.Model {
  /**
   * @remarks
   * The ID of the entity.
   * 
   * @example
   * cmgj0015****-Frequency-1
   */
  entityIds?: string;
  /**
   * @remarks
   * The package name.
   * 
   * @example
   * Pay-as-you-go package
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * 模板1
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

