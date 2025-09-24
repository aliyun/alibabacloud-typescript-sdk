// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryUserOmsDataResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the host.
   * 
   * @example
   * cn
   */
  hostId?: string;
  /**
   * @remarks
   * Indicates that the returned usage data starts from the next page. If no value is returned for this parameter or this parameter is not returned, no data can be queried.
   * 
   * @example
   * NextToken
   */
  marker?: string;
  omsData?: { [key: string]: any }[];
  static names(): { [key: string]: string } {
    return {
      hostId: 'HostId',
      marker: 'Marker',
      omsData: 'OmsData',
    };
  }

  static types(): { [key: string]: any } {
    return {
      hostId: 'string',
      marker: 'string',
      omsData: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
    };
  }

  validate() {
    if(Array.isArray(this.omsData)) {
      $dara.Model.validateArray(this.omsData);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QueryUserOmsDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code returned.
   * 
   * @example
   * Success
   */
  code?: string;
  /**
   * @remarks
   * The data returned.
   */
  data?: QueryUserOmsDataResponseBodyData;
  /**
   * @remarks
   * The message returned.
   * 
   * @example
   * Successful！
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6000EE23-274B-4E07-A697-FF2E999520A4
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: QueryUserOmsDataResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

