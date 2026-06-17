// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupResponseBodyParameterGroupParameterDetail extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * back_log
   */
  paramName?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 3000
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
   * The creation time of the parameter template, in `yyyy-MM-ddTHH:mm:ssZ` format (UTC).
   * 
   * @example
   * 2023-03-10T08:40:39Z
   */
  createTime?: string;
  /**
   * @remarks
   * The database engine type.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The database engine version.
   * 
   * @example
   * 8.0
   */
  DBVersion?: string;
  /**
   * @remarks
   * Specifies whether a cluster restart is required for the parameter template to take effect. Valid values:
   * 
   * - **0**: No restart is required.
   * 
   * - **1**: A restart is required.
   * 
   * @example
   * 1
   */
  forceRestart?: string;
  /**
   * @remarks
   * The number of parameters in the parameter template.
   * 
   * @example
   * 2
   */
  parameterCounts?: number;
  /**
   * @remarks
   * A list of parameters.
   */
  parameterDetail?: DescribeParameterGroupResponseBodyParameterGroupParameterDetail[];
  /**
   * @remarks
   * The description of the parameter template.
   * 
   * @example
   * testgroup
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * @example
   * pcpg-**************
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * 
   * @example
   * test
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The type of the parameter template. Valid values:
   * 
   * - **0**: default template
   * 
   * - **1**: custom template
   * 
   * - **2**: automatic backup template. This type of template is an automatic backup of the previous settings, created when you apply a new template.
   * 
   * @example
   * 1
   */
  parameterGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      forceRestart: 'ForceRestart',
      parameterCounts: 'ParameterCounts',
      parameterDetail: 'ParameterDetail',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupId: 'ParameterGroupId',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      DBType: 'string',
      DBVersion: 'string',
      forceRestart: 'string',
      parameterCounts: 'number',
      parameterDetail: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParameterGroupParameterDetail },
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.parameterDetail)) {
      $dara.Model.validateArray(this.parameterDetail);
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
   * A list of parameter templates.
   */
  parameterGroup?: DescribeParameterGroupResponseBodyParameterGroup[];
  /**
   * @remarks
   * The request ID.
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

