// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup extends $dara.Model {
  createTime?: string;
  engine?: string;
  engineVersion?: string;
  forceRestart?: number;
  paramCounts?: number;
  parameterGroupDesc?: string;
  parameterGroupId?: string;
  parameterGroupName?: string;
  parameterGroupType?: number;
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      forceRestart: 'ForceRestart',
      paramCounts: 'ParamCounts',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      engine: 'string',
      engineVersion: 'string',
      forceRestart: 'number',
      paramCounts: 'number',
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBodyParameterGroups extends $dara.Model {
  parameterGroup?: DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup[];
  static names(): { [key: string]: string } {
    return {
      parameterGroup: 'ParameterGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup },
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

export class DescribeParameterGroupsResponseBody extends $dara.Model {
  parameterGroups?: DescribeParameterGroupsResponseBodyParameterGroups;
  requestId?: string;
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

