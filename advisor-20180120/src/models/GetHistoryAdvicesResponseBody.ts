// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetHistoryAdvicesResponseBodyDataResult extends $dara.Model {
  /**
   * @example
   * EcsHighCpuUtilization
   */
  checkId?: string;
  checkName?: string;
  description?: string;
  /**
   * @example
   * 2023-07-01 00:00:00
   */
  gmtCreated?: string;
  /**
   * @example
   * ecs
   */
  product?: string;
  /**
   * @example
   * i-bp67acfmxazb4p****
   */
  resourceId?: string;
  /**
   * @example
   * 1
   */
  severity?: number;
  url?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'CheckId',
      checkName: 'CheckName',
      description: 'Description',
      gmtCreated: 'GmtCreated',
      product: 'Product',
      resourceId: 'ResourceId',
      severity: 'Severity',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkName: 'string',
      description: 'string',
      gmtCreated: 'string',
      product: 'string',
      resourceId: 'string',
      severity: 'number',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1
   */
  pageNo?: number;
  result?: GetHistoryAdvicesResponseBodyDataResult[];
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      result: 'Result',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      result: { 'type': 'array', 'itemType': GetHistoryAdvicesResponseBodyDataResult },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetHistoryAdvicesResponseBody extends $dara.Model {
  data?: GetHistoryAdvicesResponseBodyData;
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
      data: GetHistoryAdvicesResponseBodyData,
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

