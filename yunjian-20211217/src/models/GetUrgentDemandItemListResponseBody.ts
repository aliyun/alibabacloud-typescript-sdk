// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetUrgentDemandItemListResponseBodyData } from "./GetUrgentDemandItemListResponseBodyData";


export class GetUrgentDemandItemListResponseBody extends $dara.Model {
  code?: number;
  data?: GetUrgentDemandItemListResponseBodyData;
  message?: string;
  success?: boolean;
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
      data: GetUrgentDemandItemListResponseBodyData,
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

