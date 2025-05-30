// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListJobInfosResponseBodyData } from "./ListJobInfosResponseBodyData";


export class ListJobInfosResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: ListJobInfosResponseBodyData;
  /**
   * @remarks
   * Indicates whether the request was successful. If this parameter was not empty and the value of this parameter was not 200, the request failed.
   * 
   * @example
   * 200
   */
  httpCode?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0bc13a9516807484336515320e38f5
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      httpCode: 'httpCode',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListJobInfosResponseBodyData,
      httpCode: 'number',
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

