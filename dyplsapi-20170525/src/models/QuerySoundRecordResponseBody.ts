// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySoundRecordResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The URL of the call recording. The maximum length is 1,000 characters. The URL is valid for 1 hour.
   * 
   * @example
   * http://www.oss.com/temepl/a.mp3
   */
  fileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      fileUrl: 'FileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class QuerySoundRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the access denial.
   * 
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code. Valid values:
   * 
   * - 0000: Success.
   * 
   * Other values indicate failure.
   * 
   * @example
   * 0000
   */
  code?: string;
  /**
   * @remarks
   * The call recording query results.
   * 
   * @example
   * {"FileUrl":"http://www.oss.com/temepl/a.mp3"}
   */
  data?: QuerySoundRecordResponseBodyData;
  /**
   * @remarks
   * The response message.
   * 
   * @example
   * Success
   */
  message?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values:
   * 
   * - true: The request is successful. 
   * 
   * - false: The request failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'string',
      data: QuerySoundRecordResponseBodyData,
      message: 'string',
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

