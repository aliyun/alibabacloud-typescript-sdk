// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupsResponseBodyParameterGroupsParameterGroup extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter template was created. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-21T01:48:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The database engine of the instance.
   * 
   * @example
   * mysql
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 5.7
   */
  engineVersion?: string;
  /**
   * @remarks
   * Indicates whether the restart of an instance is required for the parameter template to take effect. Valid values:
   * 
   * *   0: A restart is not required.
   * *   1: A restart is required.
   * 
   * @example
   * 1
   */
  forceRestart?: number;
  /**
   * @remarks
   * The number of parameters in the parameter template.
   * 
   * @example
   * 2
   */
  paramCounts?: number;
  /**
   * @remarks
   * The type of the parameter template. Valid values:
   * 
   * *   0: the default parameter template.
   * *   1: a custom parameter template.
   * *   2: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
   * 
   * @example
   * 1
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * @example
   * rpg-****
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * 
   * @example
   * test1234
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The type of the parameter template. Valid values:
   * 
   * *   0: the default parameter template.
   * *   1: a custom parameter template.
   * *   2: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
   * 
   * @example
   * 1
   */
  parameterGroupType?: number;
  /**
   * @remarks
   * The time when the parameter template was last updated. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2019-11-21T02:21:35Z
   */
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

