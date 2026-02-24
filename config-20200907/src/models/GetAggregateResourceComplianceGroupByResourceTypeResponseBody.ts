// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances extends $dara.Model {
  complianceType?: string;
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
  compliances?: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResultComplianceResultListCompliances[];
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
  complianceResult?: GetAggregateResourceComplianceGroupByResourceTypeResponseBodyComplianceResult;
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

