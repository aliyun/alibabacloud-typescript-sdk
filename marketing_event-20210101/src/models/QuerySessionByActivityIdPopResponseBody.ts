// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySessionByActivityIdPopResponseBodyData extends $dara.Model {
  /**
   * @example
   * 描述
   */
  description?: string;
  /**
   * @example
   * description
   */
  descriptionEn?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  endDateTime?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 地点
   */
  location?: string;
  /**
   * @example
   * 1234
   */
  name?: string;
  /**
   * @example
   * name
   */
  nameEn?: string;
  /**
   * @example
   * 2024-09-25 14:11
   */
  startDateTime?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      descriptionEn: 'DescriptionEn',
      endDateTime: 'EndDateTime',
      id: 'Id',
      location: 'Location',
      name: 'Name',
      nameEn: 'NameEn',
      startDateTime: 'StartDateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      descriptionEn: 'string',
      endDateTime: 'string',
      id: 'number',
      location: 'string',
      name: 'string',
      nameEn: 'string',
      startDateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySessionByActivityIdPopResponseBody extends $dara.Model {
  /**
   * @example
   * deny
   */
  accessDeniedDetail?: string;
  /**
   * @example
   * data
   */
  data?: QuerySessionByActivityIdPopResponseBodyData[];
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
      data: { 'type': 'array', 'itemType': QuerySessionByActivityIdPopResponseBodyData },
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

