// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DeploySDGResponseBodyData } from "./DeploySdgresponseBodyData";


export class DeploySDGResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data object.
   */
  data?: DeploySDGResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * A331CA96-3948-4BD2-B067-F6174F5C17EA
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
      data: DeploySDGResponseBodyData,
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

