// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBInstanceDataSourcesResponseBodyData } from "./DescribeDbinstanceDataSourcesResponseBodyData";


export class DescribeDBInstanceDataSourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned result.
   */
  data?: DescribeDBInstanceDataSourcesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F543E6CC-6868-523D-8D28-0E92CF977ED2
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
      data: DescribeDBInstanceDataSourcesResponseBodyData,
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

