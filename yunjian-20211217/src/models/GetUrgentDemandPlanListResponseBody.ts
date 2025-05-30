// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUrgentDemandPlanListResponseBodyData } from "./GetUrgentDemandPlanListResponseBodyData";


export class GetUrgentDemandPlanListResponseBody extends $dara.Model {
  /**
   * @example
   * 0
   */
  code?: number;
  data?: GetUrgentDemandPlanListResponseBodyData;
  /**
   * @example
   * msg
   */
  message?: string;
  /**
   * @example
   * true
   */
  success?: boolean;
  /**
   * @example
   * 2127968716405850615204514e9332
   */
  traceId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      data: 'data',
      message: 'message',
      success: 'success',
      traceId: 'traceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: GetUrgentDemandPlanListResponseBodyData,
      message: 'string',
      success: 'boolean',
      traceId: 'string',
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

