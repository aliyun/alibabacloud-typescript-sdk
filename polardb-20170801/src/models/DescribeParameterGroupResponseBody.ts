// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupResponseBodyParameterGroup } from "./DescribeParameterGroupResponseBodyParameterGroup";


export class DescribeParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * Details about the parameter templates.
   */
  parameterGroup?: DescribeParameterGroupResponseBodyParameterGroup[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F1F16757-D31B-49CA-9BF4-305BAF******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroup: 'ParameterGroup',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParameterGroup },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterGroup)) {
      $dara.Model.validateArray(this.parameterGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

