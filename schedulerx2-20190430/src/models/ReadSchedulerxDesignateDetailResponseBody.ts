// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ReadSchedulerxDesignateDetailResponseBodyAccessDeniedDetail } from "./ReadSchedulerxDesignateDetailResponseBodyAccessDeniedDetail";
import { ReadSchedulerxDesignateDetailResponseBodyData } from "./ReadSchedulerxDesignateDetailResponseBodyData";


export class ReadSchedulerxDesignateDetailResponseBody extends $dara.Model {
  accessDeniedDetail?: ReadSchedulerxDesignateDetailResponseBodyAccessDeniedDetail;
  /**
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * -
   */
  data?: ReadSchedulerxDesignateDetailResponseBodyData;
  /**
   * @example
   * Invalid parameter: jobId=368 invalid
   */
  message?: string;
  /**
   * @example
   * 883AFE93-FB03-4FA9-A958-E750C6DE120C
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
      accessDeniedDetail: ReadSchedulerxDesignateDetailResponseBodyAccessDeniedDetail,
      code: 'number',
      data: ReadSchedulerxDesignateDetailResponseBodyData,
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

