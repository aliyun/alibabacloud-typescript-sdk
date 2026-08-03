// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupsResponseBodyParameterGroups extends $dara.Model {
  /**
   * @remarks
   * The product category. Valid values:
   * - **0**: Redis Community Edition
   * - **1**: Tair (Enhanced Edition)
   * 
   * @example
   * 0
   */
  category?: number;
  /**
   * @remarks
   * The creation time of the parameter template.
   * 
   * @example
   * 2023-04-18 16:32:45
   */
  created?: string;
  /**
   * @remarks
   * The engine type. Valid values:
   * - **redis**: Redis Community Edition or Tair (Enhanced Edition) in-memory type.
   * - **tair_pena**: Tair (Enhanced Edition) persistent memory type.
   * - **tair_pdb**: Tair (Enhanced Edition) cloud disk type.
   * 
   * @example
   * tair_pena
   */
  engine?: string;
  /**
   * @remarks
   * The engine-compatible version.
   * 
   * @example
   * 5
   */
  engineVersion?: string;
  /**
   * @remarks
   * The most recent modification time of the parameter template.
   * 
   * @example
   * 2023-04-18 16:32:45
   */
  modified?: string;
  /**
   * @remarks
   * The parameter template ID.
   * 
   * @example
   * test01
   */
  paramGroupId?: string;
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
      parameterGroupDesc: 'string',
      parameterGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of parameter templates.
   */
  parameterGroups?: DescribeParameterGroupsResponseBodyParameterGroups[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 686BB8A6-BBA5-47E5-8A75-D2ADE433****
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

