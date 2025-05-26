// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSparkReplSessionResponseBodyData } from "./GetSparkReplSessionResponseBodyData";


export class GetSparkReplSessionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetSparkReplSessionResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4CE6DF97-AEA4-484F-906F-C407EE3770EB
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetSparkReplSessionResponseBodyData,
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

