// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnSubListResponseBodyContentData extends $dara.Model {
  /**
   * @example
   * 2024-05-16T09:43:38Z
   */
  createTime?: string;
  domains?: string[];
  /**
   * @example
   * 2024-05-16T09:43:38Z
   */
  effectiveEnd?: string;
  /**
   * @example
   * 2024-05-16T09:43:38Z
   */
  effectiveFrom?: string;
  reportId?: number[];
  /**
   * @example
   * enable
   */
  status?: string;
  /**
   * @example
   * 1
   */
  subId?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      domains: 'domains',
      effectiveEnd: 'effectiveEnd',
      effectiveFrom: 'effectiveFrom',
      reportId: 'reportId',
      status: 'status',
      subId: 'subId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      domains: { 'type': 'array', 'itemType': 'string' },
      effectiveEnd: 'string',
      effectiveFrom: 'string',
      reportId: { 'type': 'array', 'itemType': 'number' },
      status: 'string',
      subId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    if(Array.isArray(this.reportId)) {
      $dara.Model.validateArray(this.reportId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSubListResponseBodyContent extends $dara.Model {
  data?: DescribeCdnSubListResponseBodyContentData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeCdnSubListResponseBodyContentData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnSubListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the custom report task.
   * 
   * @example
   * {"RequestId":"3250A51D-C11D-46BA-B6B3-95348EEDE652","Description":"Successful","Content":{"data":[{"subId":5,"reportId":[1,2,3],"createTime":"2020-09-25T09:39:33Z","domains"["www.example.com","www.example.com"],"effectiveFrom":"2020-09-17T00:00:00Z","effectiveEnd":"2020-11-17T00:00:00Z","status":"enable"}]}}
   */
  content?: DescribeCdnSubListResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3250A51D-C11D-46BA-B6B3-95348EEDE652
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: DescribeCdnSubListResponseBodyContent,
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

