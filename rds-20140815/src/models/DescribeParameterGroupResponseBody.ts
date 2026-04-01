// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetailParameterDetail extends $dara.Model {
  paramName?: string;
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
  createTime?: string;
  engine?: string;
  engineVersion?: string;
  forceRestart?: number;
  paramCounts?: number;
  paramDetail?: DescribeParameterGroupResponseBodyParamGroupParameterGroupParamDetail;
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
  appliedTime?: string;
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
  paramGroup?: DescribeParameterGroupResponseBodyParamGroup;
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

