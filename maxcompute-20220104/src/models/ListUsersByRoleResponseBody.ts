// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListUsersByRoleResponseBodyData } from "./ListUsersByRoleResponseBodyData";


export class ListUsersByRoleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListUsersByRoleResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0be3e0bb16654558425251398e27a9
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
      data: ListUsersByRoleResponseBodyData,
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

