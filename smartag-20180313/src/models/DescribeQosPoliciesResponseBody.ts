// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiGroupIds extends $dara.Model {
  dpiGroupId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dpiGroupId)) {
      $dara.Model.validateArray(this.dpiGroupId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiSignatureIds extends $dara.Model {
  dpiSignatureId?: string[];
  static names(): { [key: string]: string } {
    return {
      dpiSignatureId: 'DpiSignatureId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiSignatureId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.dpiSignatureId)) {
      $dara.Model.validateArray(this.dpiSignatureId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPoliciesQosPolicy extends $dara.Model {
  description?: string;
  destCidr?: string;
  destPortRange?: string;
  dpiGroupIds?: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiGroupIds;
  dpiSignatureIds?: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiSignatureIds;
  endTime?: string;
  ipProtocol?: string;
  name?: string;
  priority?: number;
  qosId?: string;
  qosPolicyId?: string;
  sourceCidr?: string;
  sourcePortRange?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      destCidr: 'DestCidr',
      destPortRange: 'DestPortRange',
      dpiGroupIds: 'DpiGroupIds',
      dpiSignatureIds: 'DpiSignatureIds',
      endTime: 'EndTime',
      ipProtocol: 'IpProtocol',
      name: 'Name',
      priority: 'Priority',
      qosId: 'QosId',
      qosPolicyId: 'QosPolicyId',
      sourceCidr: 'SourceCidr',
      sourcePortRange: 'SourcePortRange',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      destCidr: 'string',
      destPortRange: 'string',
      dpiGroupIds: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiGroupIds,
      dpiSignatureIds: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicyDpiSignatureIds,
      endTime: 'string',
      ipProtocol: 'string',
      name: 'string',
      priority: 'number',
      qosId: 'string',
      qosPolicyId: 'string',
      sourceCidr: 'string',
      sourcePortRange: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(this.dpiGroupIds && typeof (this.dpiGroupIds as any).validate === 'function') {
      (this.dpiGroupIds as any).validate();
    }
    if(this.dpiSignatureIds && typeof (this.dpiSignatureIds as any).validate === 'function') {
      (this.dpiSignatureIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBodyQosPolicies extends $dara.Model {
  qosPolicy?: DescribeQosPoliciesResponseBodyQosPoliciesQosPolicy[];
  static names(): { [key: string]: string } {
    return {
      qosPolicy: 'QosPolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qosPolicy: { 'type': 'array', 'itemType': DescribeQosPoliciesResponseBodyQosPoliciesQosPolicy },
    };
  }

  validate() {
    if(Array.isArray(this.qosPolicy)) {
      $dara.Model.validateArray(this.qosPolicy);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeQosPoliciesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  qosPolicies?: DescribeQosPoliciesResponseBodyQosPolicies;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 97862812-2C7E-4D25-B0D5-B26DAC7FA293
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      qosPolicies: 'QosPolicies',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      qosPolicies: DescribeQosPoliciesResponseBodyQosPolicies,
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.qosPolicies && typeof (this.qosPolicies as any).validate === 'function') {
      (this.qosPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

