// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeAccountAllPrivilegesResponseBodyData } from "./DescribeAccountAllPrivilegesResponseBodyData";


export class DescribeAccountAllPrivilegesResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details of the permissions.
   */
  data?: DescribeAccountAllPrivilegesResponseBodyData;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3BB185E9-BB54-1727-B876-13243E4C0EB5
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
      data: DescribeAccountAllPrivilegesResponseBodyData,
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

