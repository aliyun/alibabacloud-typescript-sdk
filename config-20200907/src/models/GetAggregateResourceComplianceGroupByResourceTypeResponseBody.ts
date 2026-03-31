// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances extends $dara.Model {
  /**
   * @remarks
   * The evaluation result. Valid values:
   * 
   * *   COMPLIANT: The resource is evaluated as compliant.
   * *   NON_COMPLIANT: The resource is evaluated as non-compliant.
   * *   NOT_APPLICABLE: The rule does not apply to the resource.
   * *   INSUFFICIENT_DATA: No data is available.
   * 
   * @example
   * COMPLIANT
   */
  complianceType?: string;
  /**
   * @remarks
   * The number of statistical results.
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

export class GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList extends $dara.Model {
  /**
   * @remarks
   * The queried evaluation results.
   */
  compliances?: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances[];
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
      compliances: { 'type': 'array', 'itemType': GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances },
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

export class GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult extends $dara.Model {
  /**
   * @remarks
   * The evaluation results grouped by resource type.
   */
  complianceResultList?: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList[];
  static names(): { [key: string]: string } {
    return {
      complianceResultList: 'ComplianceResultList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      complianceResultList: { 'type': 'array', 'itemType': GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultList },
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

export class GetAggregateResourceComplianceGroupByResourceTypeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried evaluation results.
   */
  complianceResult?: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0CE6AEE1-B3D8-530A-9302-6606B20503BB
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
      complianceResult: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult,
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

