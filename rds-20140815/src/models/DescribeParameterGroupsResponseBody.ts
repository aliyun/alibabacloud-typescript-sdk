// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterGroupsResponseBodyParameterGroups } from "./DescribeParameterGroupsResponseBodyParameterGroups";


export class DescribeParameterGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the parameter templates.
   */
  parameterGroups?: DescribeParameterGroupsResponseBodyParameterGroups;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D4A23265-C5B6-42E1-98A0-EFA1EB42E723
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether parameter templates exist in the specified region. Valid values:
   * *   true
   * *   false
   * >Notice: This parameter is deprecated.
   * 
   * @example
   * false
   */
  signalForOptimizeParams?: boolean;
  static names(): { [key: string]: string } {
    return {
      parameterGroups: 'ParameterGroups',
      requestId: 'RequestId',
      signalForOptimizeParams: 'SignalForOptimizeParams',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroups: DescribeParameterGroupsResponseBodyParameterGroups,
      requestId: 'string',
      signalForOptimizeParams: 'boolean',
    };
  }

  validate() {
    if(this.parameterGroups && typeof (this.parameterGroups as any).validate === 'function') {
      (this.parameterGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

