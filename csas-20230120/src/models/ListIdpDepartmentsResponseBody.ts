// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListIdpDepartmentsResponseBodyData } from "./ListIdpDepartmentsResponseBodyData";


export class ListIdpDepartmentsResponseBody extends $dara.Model {
  data?: ListIdpDepartmentsResponseBodyData;
  /**
   * @example
   * 102350E7-1A20-58F5-9D63-ABEA820AE6E1
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
      data: ListIdpDepartmentsResponseBodyData,
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

