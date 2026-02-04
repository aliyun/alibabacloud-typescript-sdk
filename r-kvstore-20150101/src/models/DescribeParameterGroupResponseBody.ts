// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupResponseBodyParameterGroupParamGroupsDetails extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * timeout
   */
  paramName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 1000
   */
  paramValue?: string;
  static names(): { [key: string]: string } {
    return {
      paramName: 'ParamName',
      paramValue: 'ParamValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramName: 'string',
      paramValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBodyParameterGroup extends $dara.Model {
  /**
   * @remarks
   * The service category. Valid values:
   * 
   * *   **0**: Redis Open-Source Edition
   * *   **1**: Tair (Enterprise Edition)
   * 
   * @example
   * 1
   */
  category?: number;
  /**
   * @remarks
   * The time when the parameter template was created.
   * 
   * @example
   * 2023-04-18 16:32:45
   */
  created?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * 
   * * *redis*: Redis or Tair DRAM-based instance
   * * *tair_pena*: Tair persistent memory-optimized instance
   * * *tair_pdb*: Tair ESSD-based instance
   * 
   * @example
   * redis
   */
  engine?: string;
  /**
   * @remarks
   * The compatible engine version.
   * 
   * @example
   * 5.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The time when the parameter template was last modified.
   * 
   * @example
   * 2023-04-18 16:32:45
   */
  modified?: string;
  /**
   * @remarks
   * The parameter template ID, which is globally unique.
   * 
   * @example
   * sys-001*****
   */
  paramGroupId?: string;
  /**
   * @remarks
   * The parameter details of the parameter template.
   */
  paramGroupsDetails?: DescribeParameterGroupResponseBodyParameterGroupParamGroupsDetails[];
  /**
   * @remarks
   * The description of the parameter template.
   * 
   * @example
   * test
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * 
   * @example
   * testGroupName
   */
  parameterGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      created: 'Created',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      modified: 'Modified',
      paramGroupId: 'ParamGroupId',
      paramGroupsDetails: 'ParamGroupsDetails',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupName: 'ParameterGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'number',
      created: 'string',
      engine: 'string',
      engineVersion: 'string',
      modified: 'string',
      paramGroupId: 'string',
      paramGroupsDetails: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParameterGroupParamGroupsDetails },
      parameterGroupDesc: 'string',
      parameterGroupName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.paramGroupsDetails)) {
      $dara.Model.validateArray(this.paramGroupsDetails);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the parameter template.
   */
  parameterGroup?: DescribeParameterGroupResponseBodyParameterGroup;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A501A191-BD70-5E50-98A9-C2A486A82****
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
      parameterGroup: DescribeParameterGroupResponseBodyParameterGroup,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameterGroup && typeof (this.parameterGroup as any).validate === 'function') {
      (this.parameterGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

