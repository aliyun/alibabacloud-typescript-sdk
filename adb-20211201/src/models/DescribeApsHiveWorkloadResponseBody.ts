// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeApsHiveWorkloadResponseBodyApsWorkload } from "./DescribeApsHiveWorkloadResponseBodyApsWorkload";


export class DescribeApsHiveWorkloadResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried job.
   * 
   * @example
   * -
   */
  apsWorkload?: DescribeApsHiveWorkloadResponseBodyApsWorkload;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 86F92D26-B774-5FA1-8E53-******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apsWorkload: 'ApsWorkload',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apsWorkload: DescribeApsHiveWorkloadResponseBodyApsWorkload,
      requestId: 'string',
    };
  }

  validate() {
    if(this.apsWorkload && typeof (this.apsWorkload as any).validate === 'function') {
      (this.apsWorkload as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

