// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParametersResponseBodyParameters } from "./DescribeParametersResponseBodyParameters";


export class DescribeParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a restart is required for changes to the parameter to take effect. Valid values:   
   * - true: A restart is required.   
   * - false: A restart is not required.
   */
  parameters?: DescribeParametersResponseBodyParameters[];
  /**
   * @remarks
   * The return result of the request.
   * 
   * @example
   * EE205C00-30E4-XXXX-XXXX-87E3A8A2AA0C
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

