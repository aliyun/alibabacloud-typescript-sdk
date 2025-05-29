// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParametersResponseBodyParameters } from "./DescribeParametersResponseBodyParameters";


export class DescribeParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried configuration parameters.
   */
  parameters?: DescribeParametersResponseBodyParameters[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 62506167-D284-562A-B7C2-0A**********
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyParameters },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

