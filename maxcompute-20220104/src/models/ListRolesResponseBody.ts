// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRolesResponseBodyData } from "./ListRolesResponseBodyData";


export class ListRolesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: ListRolesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0a06dfe716686526652451361e80ae
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
      data: ListRolesResponseBodyData,
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

