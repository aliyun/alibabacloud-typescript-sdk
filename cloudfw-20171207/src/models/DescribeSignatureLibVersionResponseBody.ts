// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSignatureLibVersionResponseBodyVersion } from "./DescribeSignatureLibVersionResponseBodyVersion";


export class DescribeSignatureLibVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 9C50C2A9-4BBB-5504-8ADA-C41A79B8C946
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 132
   */
  totalCount?: number;
  /**
   * @remarks
   * The information about the versions.
   */
  version?: DescribeSignatureLibVersionResponseBodyVersion[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      totalCount: 'number',
      version: { 'type': 'array', 'itemType': DescribeSignatureLibVersionResponseBodyVersion },
    };
  }

  validate() {
    if(Array.isArray(this.version)) {
      $dara.Model.validateArray(this.version);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

