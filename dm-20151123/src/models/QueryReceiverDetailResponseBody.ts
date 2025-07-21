// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryReceiverDetailResponseBodyDataDetail extends $dara.Model {
  /**
   * @remarks
   * Creation Time
   * 
   * @example
   * 2019-09-29T13:28Z
   */
  createTime?: string;
  /**
   * @remarks
   * Content
   * 
   * @example
   * {\\"Domains\\": [\\"a.example.net\\", \\"b.example.net\\", \\"c.example.net\\", \\"d.example.net\\"]}
   */
  data?: string;
  /**
   * @remarks
   * Recipient address
   * 
   * @example
   * a***@example.net
   */
  email?: string;
  /**
   * @remarks
   * Creation time in UTC format
   * 
   * @example
   * 1569734892
   */
  utcCreateTime?: number;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      data: 'Data',
      email: 'Email',
      utcCreateTime: 'UtcCreateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      data: 'string',
      email: 'string',
      utcCreateTime: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailResponseBodyData extends $dara.Model {
  detail?: QueryReceiverDetailResponseBodyDataDetail[];
  static names(): { [key: string]: string } {
    return {
      detail: 'detail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      detail: { 'type': 'array', 'itemType': QueryReceiverDetailResponseBodyDataDetail },
    };
  }

  validate() {
    if(Array.isArray(this.detail)) {
      $dara.Model.validateArray(this.detail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryReceiverDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Field name for the Data of recipients
   * 
   * @example
   * UserName,NickName,Gender,Birthday,Mobile
   */
  dataSchema?: string;
  /**
   * @remarks
   * Used for pagination. If there are more results, set this returned value to the NextStart in the next request.
   * 
   * @example
   * 90f0243616#40test@example.com
   */
  nextStart?: string;
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * 10A1AD70-E48E-476D-98D9-39BD92193837
   */
  requestId?: string;
  /**
   * @remarks
   * Total count (deprecated field, kept for historical compatibility)
   * 
   * @example
   * 361
   */
  totalCount?: number;
  /**
   * @remarks
   * Detailed information
   */
  data?: QueryReceiverDetailResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      dataSchema: 'DataSchema',
      nextStart: 'NextStart',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataSchema: 'string',
      nextStart: 'string',
      requestId: 'string',
      totalCount: 'number',
      data: QueryReceiverDetailResponseBodyData,
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

