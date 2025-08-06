// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainTopReferVisitResponseBodyTopReferListReferList extends $dara.Model {
  flow?: string;
  flowProportion?: number;
  referDetail?: string;
  visitData?: string;
  visitProportion?: number;
  static names(): { [key: string]: string } {
    return {
      flow: 'Flow',
      flowProportion: 'FlowProportion',
      referDetail: 'ReferDetail',
      visitData: 'VisitData',
      visitProportion: 'VisitProportion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      flow: 'string',
      flowProportion: 'number',
      referDetail: 'string',
      visitData: 'string',
      visitProportion: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTopReferVisitResponseBodyTopReferList extends $dara.Model {
  referList?: DescribeVodDomainTopReferVisitResponseBodyTopReferListReferList[];
  static names(): { [key: string]: string } {
    return {
      referList: 'ReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      referList: { 'type': 'array', 'itemType': DescribeVodDomainTopReferVisitResponseBodyTopReferListReferList },
    };
  }

  validate() {
    if(Array.isArray(this.referList)) {
      $dara.Model.validateArray(this.referList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainTopReferVisitResponseBody extends $dara.Model {
  domainName?: string;
  requestId?: string;
  startTime?: string;
  topReferList?: DescribeVodDomainTopReferVisitResponseBodyTopReferList;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      requestId: 'RequestId',
      startTime: 'StartTime',
      topReferList: 'TopReferList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      requestId: 'string',
      startTime: 'string',
      topReferList: DescribeVodDomainTopReferVisitResponseBodyTopReferList,
    };
  }

  validate() {
    if(this.topReferList && typeof (this.topReferList as any).validate === 'function') {
      (this.topReferList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

