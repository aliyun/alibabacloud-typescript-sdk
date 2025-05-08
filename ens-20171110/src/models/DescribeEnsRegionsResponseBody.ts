// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEnsRegionsResponseBodyEnsRegions } from "./DescribeEnsRegionsResponseBodyEnsRegions";


export class DescribeEnsRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The service code. 0 is returned for a successful request. An error code is returned for a failed request.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The information about the regions.
   */
  ensRegions?: DescribeEnsRegionsResponseBodyEnsRegions;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      ensRegions: 'EnsRegions',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      ensRegions: DescribeEnsRegionsResponseBodyEnsRegions,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ensRegions && typeof (this.ensRegions as any).validate === 'function') {
      (this.ensRegions as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

