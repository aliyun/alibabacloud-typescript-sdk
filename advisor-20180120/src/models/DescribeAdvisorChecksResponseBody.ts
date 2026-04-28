// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvisorChecksResponseBodyDataAdvisorCheck extends $dara.Model {
  category?: string;
  code?: string;
  description?: string;
  gmtCreated?: string;
  gmtModified?: string;
  name?: string;
  operateColumn?: string;
  product?: string;
  status?: string;
  tips?: string;
  viewColumn?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      code: 'Code',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      gmtModified: 'GmtModified',
      name: 'Name',
      operateColumn: 'OperateColumn',
      product: 'Product',
      status: 'Status',
      tips: 'Tips',
      viewColumn: 'ViewColumn',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      code: 'string',
      description: 'string',
      gmtCreated: 'string',
      gmtModified: 'string',
      name: 'string',
      operateColumn: 'string',
      product: 'string',
      status: 'string',
      tips: 'string',
      viewColumn: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksResponseBodyData extends $dara.Model {
  advisorCheck?: DescribeAdvisorChecksResponseBodyDataAdvisorCheck[];
  static names(): { [key: string]: string } {
    return {
      advisorCheck: 'AdvisorCheck',
    };
  }

  static types(): { [key: string]: any } {
    return {
      advisorCheck: { 'type': 'array', 'itemType': DescribeAdvisorChecksResponseBodyDataAdvisorCheck },
    };
  }

  validate() {
    if(Array.isArray(this.advisorCheck)) {
      $dara.Model.validateArray(this.advisorCheck);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorChecksResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  data?: DescribeAdvisorChecksResponseBodyData;
  /**
   * @example
   * 566331F9-5AB3-550F-B745-A730331F97A9
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: DescribeAdvisorChecksResponseBodyData,
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

