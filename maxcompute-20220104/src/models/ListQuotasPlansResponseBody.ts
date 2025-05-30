// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListQuotasPlansResponseBodyData } from "./ListQuotasPlansResponseBodyData";


export class ListQuotasPlansResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListQuotasPlansResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0be3e0bd16661643917136451ebf55
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListQuotasPlansResponseBodyData,
      requestId: 'string',
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

