// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RestartDBClusterResponseBodyData } from "./RestartDbclusterResponseBodyData";


export class RestartDBClusterResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information returned.
   */
  data?: RestartDBClusterResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BD0D0B17-C145-5B91-BFC2-6791927EE973
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
      data: RestartDBClusterResponseBodyData,
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

