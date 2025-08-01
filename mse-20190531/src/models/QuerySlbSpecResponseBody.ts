// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySlbSpecResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the returned data.
   * 
   * @example
   * 2
   */
  id?: number;
  /**
   * @remarks
   * The maximum number of connections.
   * 
   * @example
   * 50,000
   */
  maxConnection?: string;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * Standard I
   */
  name?: string;
  /**
   * @remarks
   * The number of connections per second.
   * 
   * @example
   * 50,000
   */
  newConnectionPerSecond?: string;
  /**
   * @remarks
   * The number of queries per second (QPS).
   * 
   * @example
   * 50,000
   */
  qps?: string;
  /**
   * @remarks
   * The specification of the instance.
   * 
   * @example
   * slb.s2.small
   */
  spec?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      maxConnection: 'MaxConnection',
      name: 'Name',
      newConnectionPerSecond: 'NewConnectionPerSecond',
      qps: 'Qps',
      spec: 'Spec',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      maxConnection: 'string',
      name: 'string',
      newConnectionPerSecond: 'string',
      qps: 'string',
      spec: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySlbSpecResponseBody extends $dara.Model {
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data entries returned.
   */
  data?: QuerySlbSpecResponseBodyData[];
  /**
   * @remarks
   * The HTTP status code returned.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The message returned. If the request is successful, a success message is returned. If the request fails, an error message is returned.
   * 
   * @example
   * The request is successfully processed.
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 316F5F64-F73D-42DC-8632-01E308B6****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`: The request was successful.
   * *   `false`: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': QuerySlbSpecResponseBodyData },
      httpStatusCode: 'number',
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

