// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDeliverListResponseBodyContentDataDeliverEmail extends $dara.Model {
  to?: string[];
  static names(): { [key: string]: string } {
    return {
      to: 'to',
    };
  }

  static types(): { [key: string]: any } {
    return {
      to: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.to)) {
      $dara.Model.validateArray(this.to);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDeliverListResponseBodyContentDataDeliver extends $dara.Model {
  email?: DescribeCdnDeliverListResponseBodyContentDataDeliverEmail;
  static names(): { [key: string]: string } {
    return {
      email: 'email',
    };
  }

  static types(): { [key: string]: any } {
    return {
      email: DescribeCdnDeliverListResponseBodyContentDataDeliverEmail,
    };
  }

  validate() {
    if(this.email && typeof (this.email as any).validate === 'function') {
      (this.email as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDeliverListResponseBodyContentDataReports extends $dara.Model {
  /**
   * @example
   * 1
   */
  reportId?: number;
  static names(): { [key: string]: string } {
    return {
      reportId: 'reportId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      reportId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDeliverListResponseBodyContentData extends $dara.Model {
  /**
   * @example
   * 2021-12-30T10:29:29Z
   */
  createTime?: string;
  /**
   * @example
   * 00 00 08 * * ?
   */
  crontab?: string;
  deliver?: DescribeCdnDeliverListResponseBodyContentDataDeliver;
  /**
   * @example
   * 1
   */
  deliverId?: number;
  dmList?: string[];
  /**
   * @example
   * d
   */
  frequency?: string;
  /**
   * @example
   * xxxx
   */
  name?: string;
  reports?: DescribeCdnDeliverListResponseBodyContentDataReports[];
  /**
   * @example
   * enable
   */
  status?: string;
  /**
   * @example
   * -1d
   */
  timeEndFormat?: string;
  /**
   * @example
   * -1d
   */
  timeFromFormat?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      crontab: 'crontab',
      deliver: 'deliver',
      deliverId: 'deliverId',
      dmList: 'dmList',
      frequency: 'frequency',
      name: 'name',
      reports: 'reports',
      status: 'status',
      timeEndFormat: 'timeEndFormat',
      timeFromFormat: 'timeFromFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      crontab: 'string',
      deliver: DescribeCdnDeliverListResponseBodyContentDataDeliver,
      deliverId: 'number',
      dmList: { 'type': 'array', 'itemType': 'string' },
      frequency: 'string',
      name: 'string',
      reports: { 'type': 'array', 'itemType': DescribeCdnDeliverListResponseBodyContentDataReports },
      status: 'string',
      timeEndFormat: 'string',
      timeFromFormat: 'string',
    };
  }

  validate() {
    if(this.deliver && typeof (this.deliver as any).validate === 'function') {
      (this.deliver as any).validate();
    }
    if(Array.isArray(this.dmList)) {
      $dara.Model.validateArray(this.dmList);
    }
    if(Array.isArray(this.reports)) {
      $dara.Model.validateArray(this.reports);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeCdnDeliverListResponseBodyContent extends $dara.Model {
  data?: DescribeCdnDeliverListResponseBodyContentData[];
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': DescribeCdnDeliverListResponseBodyContentData },
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

export class DescribeCdnDeliverListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the tracking task.
   * 
   * @example
   * "data": [{"deliverId": 1,"status": "enable","createTime": "2020-10-14T11:19:26Z","crontab": "0 0 0 \\* \\* ?","frequency": "d","name": "The name of the tracking task","dmList": ["www.example.com"],"reports": [{"reportId": 1,"conditions": [{"op": "in","field": "prov","value": ["Heilongjiang","Beijing"]}} },{"reportId": 2}],"deliver": {"email": {"subject": "subject","to": ["example@alibaba-inc.com","example@alibaba-inc.com"]}}}]}
   */
  content?: DescribeCdnDeliverListResponseBodyContent;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 12345
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
      content: DescribeCdnDeliverListResponseBodyContent,
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

