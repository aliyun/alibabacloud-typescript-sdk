// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckCloudResourceAuthorizedResponseBodyData } from "./CheckCloudResourceAuthorizedResponseBodyData";


export class CheckCloudResourceAuthorizedResponseBody extends $dara.Model {
  data?: CheckCloudResourceAuthorizedResponseBodyData;
  /**
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
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
      data: CheckCloudResourceAuthorizedResponseBodyData,
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

