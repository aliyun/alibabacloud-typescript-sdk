// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRoleAclOnObjectResponseBodyData } from "./GetRoleAclOnObjectResponseBodyData";


export class GetRoleAclOnObjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data
   */
  data?: GetRoleAclOnObjectResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc1366d16686529650188023ef87f
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
      data: GetRoleAclOnObjectResponseBodyData,
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

