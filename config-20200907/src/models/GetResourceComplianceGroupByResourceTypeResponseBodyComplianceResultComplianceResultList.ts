// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances } from "./GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances";


export class GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList extends $dara.Model {
  /**
   * @remarks
   * The queried evaluation results.
   */
  compliances?: GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances[];
  /**
   * @remarks
   * The type of the evaluated resource.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances },
      resourceType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.compliances)) {
      $dara.Model.validateArray(this.compliances);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

