// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUrgentDemandPlanDetailResponseBodyData } from "./GetUrgentDemandPlanDetailResponseBodyData";


export class GetUrgentDemandPlanDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * code
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * body
   */
  data?: GetUrgentDemandPlanDetailResponseBodyData;
  /**
   * @example
   * msg
   */
  message?: string;
  /**
   * @remarks
   * success
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * traceId
   * 
   * @example
   * 1e2b798516402440016572132e1459
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
      data: GetUrgentDemandPlanDetailResponseBodyData,
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

