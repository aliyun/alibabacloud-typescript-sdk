// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceConfigResponseBodyData } from "./DescribeDbinstanceConfigResponseBodyData";


export class DescribeDBInstanceConfigResponseBody extends $dara.Model {
  data?: DescribeDBInstanceConfigResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 66428721-xxxx-xxxx-xxxx-3BD1B67837E0
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
      data: DescribeDBInstanceConfigResponseBodyData,
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

