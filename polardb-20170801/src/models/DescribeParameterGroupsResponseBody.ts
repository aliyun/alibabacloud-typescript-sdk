// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupsResponseBodyParameterGroups } from "./DescribeParameterGroupsResponseBodyParameterGroups";


export class DescribeParameterGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of parameter templates.
   */
  parameterGroups?: DescribeParameterGroupsResponseBodyParameterGroups[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 944CED46-A6F7-40C6-B6DC-C6E5CC******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      parameterGroups: 'ParameterGroups',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroups: { 'type': 'array', 'itemType': DescribeParameterGroupsResponseBodyParameterGroups },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterGroups)) {
      $dara.Model.validateArray(this.parameterGroups);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

