// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadSchedulerxDesignateInfoResponseBodyAccessDeniedDetail } from "./ReadSchedulerxDesignateInfoResponseBodyAccessDeniedDetail";
import { ReadSchedulerxDesignateInfoResponseBodyData } from "./ReadSchedulerxDesignateInfoResponseBodyData";


export class ReadSchedulerxDesignateInfoResponseBody extends $dara.Model {
  accessDeniedDetail?: ReadSchedulerxDesignateInfoResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ReadSchedulerxDesignateInfoResponseBodyData;
  /**
   * @example
   * jobId=xxx is not existed
   */
  message?: string;
  /**
   * @example
   * 4F68ABED-AC31-4412-9297-D9A8F0401108
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
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: ReadSchedulerxDesignateInfoResponseBodyAccessDeniedDetail,
      code: 'number',
      data: ReadSchedulerxDesignateInfoResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.accessDeniedDetail && typeof (this.accessDeniedDetail as any).validate === 'function') {
      (this.accessDeniedDetail as any).validate();
    }
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

