// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeEsExceptionDataResponseBodyContents } from "./DescribeEsExceptionDataResponseBodyContents";


export class DescribeEsExceptionDataResponseBody extends $dara.Model {
  /**
   * @remarks
   * The content of the script for which an error was reported.
   */
  contents?: DescribeEsExceptionDataResponseBodyContents[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 99D61AB3-6164-4CF2-A0DE-129C9B07618B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      contents: 'Contents',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contents: { 'type': 'array', 'itemType': DescribeEsExceptionDataResponseBodyContents },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.contents)) {
      $dara.Model.validateArray(this.contents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

