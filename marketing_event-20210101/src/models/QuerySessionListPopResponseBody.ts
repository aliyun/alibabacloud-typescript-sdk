// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionListPopResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * code
   */
  code?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  endTime?: string;
  /**
   * @remarks
   * id
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * location
   * 
   * @example
   * location
   */
  location?: string;
  /**
   * @remarks
   * name
   * 
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      endTime: 'EndTime',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      endTime: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionListPopResponseBody extends $dara.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: QuerySessionListPopResponseBodyData[];
  /**
   * @example
   * 200
   */
  errCode?: string;
  /**
   * @example
   * error
   */
  errMessage?: string;
  /**
   * @example
   * 403
   */
  httpStatusCode?: number;
  /**
   * @example
   * 1skladklasmda
   */
  requestId?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      data: 'Data',
      errCode: 'ErrCode',
      errMessage: 'ErrMessage',
      httpStatusCode: 'HttpStatusCode',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      data: { 'type': 'array', 'itemType': QuerySessionListPopResponseBodyData },
      errCode: 'string',
      errMessage: 'string',
      httpStatusCode: 'number',
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

