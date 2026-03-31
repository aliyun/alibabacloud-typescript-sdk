// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances extends $dara.Model {
  /**
   * @remarks
   * The evaluation result. Valid values:
   * 
   * *   COMPLIANT: The resources are evaluated as compliant.
   * *   NON_COMPLIANT: The resources are evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to the resources.
   * *   INSUFFICIENT_DATA: No resource data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The total number of evaluation results.
   * 
   * @example
   * 1
   */
  count?: number;
  static names(): { [key: string]: string } {
    return {
      complianceType: 'ComplianceType',
      count: 'Count',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceType: 'string',
      count: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList extends $dara.Model {
  /**
   * @remarks
   * The queried evaluation results.
   */
  compliances?: GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances[];
  /**
   * @remarks
   * The region ID of the evaluated resource.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      compliances: 'Compliances',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compliances: { 'type': 'array', 'itemType': GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultListCompliances },
      regionId: 'string',
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

export class GetResourceComplianceGroupByRegionResponseBodyComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The evaluation results grouped by region.
   */
  complianceResultList?: GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList[];
  static names(): { [key: string]: string } {
    return {
      complianceResultList: 'ComplianceResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResultList: { 'type': 'array', 'itemType': GetResourceComplianceGroupByRegionResponseBodyComplianceResultComplianceResultList },
    };
  }

  validate() {
    if(Array.isArray(this.complianceResultList)) {
      $dara.Model.validateArray(this.complianceResultList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetResourceComplianceGroupByRegionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried evaluation results.
   */
  complianceResult?: GetResourceComplianceGroupByRegionResponseBodyComplianceResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0FDF8006-34A0-5334-8C79-48F64EAB34F1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      complianceResult: 'ComplianceResult',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResult: GetResourceComplianceGroupByRegionResponseBodyComplianceResult,
      requestId: 'string',
    };
  }

  validate() {
    if(this.complianceResult && typeof (this.complianceResult as any).validate === 'function') {
      (this.complianceResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

