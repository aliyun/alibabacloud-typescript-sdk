// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAdvisorResourcesResponseBodyDataResultResource extends $dara.Model {
  data?: string;
  product?: string;
  regionId?: string;
  resourceId?: string;
  resourceName?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      product: 'Product',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceName: 'ResourceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      product: 'string',
      regionId: 'string',
      resourceId: 'string',
      resourceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorResourcesResponseBodyDataResult extends $dara.Model {
  resource?: DescribeAdvisorResourcesResponseBodyDataResultResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeAdvisorResourcesResponseBodyDataResultResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorResourcesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  result?: DescribeAdvisorResourcesResponseBodyDataResult;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      result: 'Result',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      result: DescribeAdvisorResourcesResponseBodyDataResult,
      total: 'number',
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAdvisorResourcesResponseBody extends $dara.Model {
  data?: DescribeAdvisorResourcesResponseBodyData;
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
      data: DescribeAdvisorResourcesResponseBodyData,
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

