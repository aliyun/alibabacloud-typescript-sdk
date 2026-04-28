// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvicesResponseBodyDataAdvice extends $dara.Model {
  aliyunId?: number;
  checkId?: string;
  checkName?: string;
  checkPlanId?: number;
  content?: string;
  description?: string;
  gmtCreated?: string;
  gmtModified?: string;
  id?: number;
  isExpired?: boolean;
  product?: string;
  resource?: string;
  resourceId?: string;
  severity?: number;
  static names(): { [key: string]: string } {
    return {
      aliyunId: 'AliyunId',
      checkId: 'CheckId',
      checkName: 'CheckName',
      checkPlanId: 'CheckPlanId',
      content: 'Content',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      id: 'Id',
      isExpired: 'IsExpired',
      product: 'Product',
      resource: 'Resource',
      resourceId: 'ResourceId',
      severity: 'Severity',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliyunId: 'number',
      checkId: 'string',
      checkName: 'string',
      checkPlanId: 'number',
      content: 'string',
      description: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      id: 'number',
      isExpired: 'boolean',
      product: 'string',
      resource: 'string',
      resourceId: 'string',
      severity: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesResponseBodyData extends $dara.Model {
  advice?: DescribeAdvicesResponseBodyDataAdvice[];
  static names(): { [key: string]: string } {
    return {
      advice: 'Advice',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advice: { 'type': 'array', 'itemType': DescribeAdvicesResponseBodyDataAdvice },
    };
  }

  validate() {
    if(Array.isArray(this.advice)) {
      $dara.Model.validateArray(this.advice);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvicesResponseBody extends $dara.Model {
  data?: DescribeAdvicesResponseBodyData;
  /**
   * @example
   * 566331F9-5AB3-550F-B745-A730331F97A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeAdvicesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

