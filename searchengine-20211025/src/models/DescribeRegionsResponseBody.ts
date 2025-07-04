// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeRegionsResponseBodyResult } from "./DescribeRegionsResponseBodyResult";


export class DescribeRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * id of request
   * 
   * @example
   * E7B7D598-B080-5C8E-AA35-D43EC0D5F886
   */
  requestId?: string;
  /**
   * @remarks
   * The result.
   */
  result?: DescribeRegionsResponseBodyResult[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      result: 'result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: { 'type': 'array', 'itemType': DescribeRegionsResponseBodyResult },
    };
  }

  validate() {
    if(Array.isArray(this.result)) {
      $dara.Model.validateArray(this.result);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

