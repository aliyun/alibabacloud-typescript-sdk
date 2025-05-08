// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateServiceRequestCommodityMeteringEntityMappings extends $dara.Model {
  /**
   * @remarks
   * Metering entity IDs.
   */
  entityIds?: string[];
  /**
   * @remarks
   * The specification name.
   * 
   * @example
   * This parameter is not publicly accessible.
   */
  specificationName?: string;
  /**
   * @remarks
   * The template name.
   * 
   * @example
   * The service ID.
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
      entityIds: { 'type': 'array', 'itemType': 'string' },
      specificationName: 'string',
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.entityIds)) {
      $dara.Model.validateArray(this.entityIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

