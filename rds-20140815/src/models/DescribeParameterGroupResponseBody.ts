// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail extends $dara.Model {
  /**
   * @remarks
   * The name of the parameter.
   * 
   * @example
   * back_log
   */
  paramName?: string;
  /**
   * @remarks
   * The value of the parameter.
   * 
   * @example
   * 2000
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

export class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail extends $dara.Model {
  parameterDetail?: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail[];
  static names(): { [key: string]: string } {
    return {
      parameterDetail: 'ParameterDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDetail: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail },
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

export class DescribeParameterGroupResponseBodyParamGroupParameterGroup extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter template was created.
   * 
   * @example
   * 2019-10-22T06:02:53Z
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
   * The database engine version of the instance.
   * 
   * @example
   * 5.6
   */
  engineVersion?: string;
  /**
   * @remarks
   * Indicates whether the restart of an instance is required for the parameter template to take effect. Valid values:
   * 
   * *   **0**: A restart is not required.
   * *   **1**: A restart is required.
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
   * The details of the parameters.
   */
  paramDetail?: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail;
  /**
   * @remarks
   * The description of the parameter template.
   * 
   * @example
   * testGroup1
   */
  parameterGroupDesc?: string;
  /**
   * @remarks
   * The ID of the parameter template.
   * 
   * @example
   * rpg-dp****
   */
  parameterGroupId?: string;
  /**
   * @remarks
   * The name of the parameter template.
   * 
   * @example
   * test123456
   */
  parameterGroupName?: string;
  /**
   * @remarks
   * The type of the parameter template. Valid values:
   * 
   * *   **0**: the default parameter template.
   * *   **1**: a custom parameter template.
   * *   **2**: an automatic backup parameter template. After you apply this type of template, the system automatically backs up the original parameter settings and saves the backup as a template.
   * 
   * @example
   * 1
   */
  parameterGroupType?: number;
  /**
   * @remarks
   * The time when the parameter template was last updated. The time follows the ISO 8601 standard in the *yyyy-MM-dd*T*HH:mm:ss*Z format. The time is displayed in UTC.
   * 
   * @example
   * 2019-10-22T06:07:54Z
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      forceRestart: 'ForceRestart',
      paramCounts: 'ParamCounts',
      paramDetail: 'ParamDetail',
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
      paramDetail: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail,
      parameterGroupDesc: 'string',
      parameterGroupId: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'number',
      updateTime: 'string',
    };
  }

  validate() {
    if(this.paramDetail && typeof (this.paramDetail as any).validate === 'function') {
      (this.paramDetail as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBodyParamGroup extends $dara.Model {
  parameterGroup?: DescribeParameterGroupResponseBodyParamGroupParameterGroup[];
  static names(): { [key: string]: string } {
    return {
      parameterGroup: 'ParameterGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterGroup: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyParamGroupParameterGroup },
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

export class DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the parameter template was applied.
   * 
   * @example
   * 2022-10-17T03:19:02Z
   */
  appliedTime?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * rm-bp170****
   */
  DBInstanceName?: string;
  static names(): { [key: string]: string } {
    return {
      appliedTime: 'AppliedTime',
      DBInstanceName: 'DBInstanceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appliedTime: 'string',
      DBInstanceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupResponseBodyRelatedCustinsInfo extends $dara.Model {
  relatedCustinsInfo?: DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo[];
  static names(): { [key: string]: string } {
    return {
      relatedCustinsInfo: 'RelatedCustinsInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      relatedCustinsInfo: { 'type': 'array', 'itemType': DescribeParameterGroupResponseBodyRelatedCustinsInfoRelatedCustinsInfo },
    };
  }

  validate() {
    if(Array.isArray(this.relatedCustinsInfo)) {
      $dara.Model.validateArray(this.relatedCustinsInfo);
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
  paramGroup?: DescribeParameterGroupResponseBodyParamGroup;
  /**
   * @remarks
   * The information about the instance to which the parameter template is applied.
   * 
   * >  This parameter is available only for ApsaraDB RDS for PostgreSQL instances.
   */
  relatedCustinsInfo?: DescribeParameterGroupResponseBodyRelatedCustinsInfo;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 498AE8CA-8C81-4A01-AF37-2B902014ED30
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      paramGroup: 'ParamGroup',
      relatedCustinsInfo: 'RelatedCustinsInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramGroup: DescribeParameterGroupResponseBodyParamGroup,
      relatedCustinsInfo: DescribeParameterGroupResponseBodyRelatedCustinsInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(this.paramGroup && typeof (this.paramGroup as any).validate === 'function') {
      (this.paramGroup as any).validate();
    }
    if(this.relatedCustinsInfo && typeof (this.relatedCustinsInfo as any).validate === 'function') {
      (this.relatedCustinsInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

