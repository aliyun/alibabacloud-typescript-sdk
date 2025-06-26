// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceConfigChangeLogResponseBodyData } from "./DescribeDbinstanceConfigChangeLogResponseBodyData";


export class DescribeDBInstanceConfigChangeLogResponseBody extends $dara.Model {
  data?: DescribeDBInstanceConfigChangeLogResponseBodyData;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 780DE414-*********-88BE-A2E21B862B57
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
      data: DescribeDBInstanceConfigChangeLogResponseBodyData,
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

