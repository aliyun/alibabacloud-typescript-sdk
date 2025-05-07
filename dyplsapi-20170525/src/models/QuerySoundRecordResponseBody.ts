// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QuerySoundRecordResponseBodyData } from "./QuerySoundRecordResponseBodyData";


export class QuerySoundRecordResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * 返回状态码 0000表示成功 其他表示失败
   * 
   * @example
   * 0000
   */
  code?: string;
  data?: QuerySoundRecordResponseBodyData;
  /**
   * @remarks
   * 返回信息
   * 
   * @example
   * 成功
   */
  message?: string;
  /**
   * @remarks
   * 返回是否成功 true  表示成功 false表示失败
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

