// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyConfigParametersDBInstanceParameter extends $dara.Model {
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyConfigParameters extends $dara.Model {
  DBInstanceParameter?: DescribeParametersResponseBodyConfigParametersDBInstanceParameter[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceParameter: 'DBInstanceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyConfigParametersDBInstanceParameter },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceParameter)) {
      $dara.Model.validateArray(this.DBInstanceParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyParamGroupInfo extends $dara.Model {
  paramGroupId?: string;
  parameterGroupDesc?: string;
  parameterGroupName?: string;
  parameterGroupType?: string;
  static names(): { [key: string]: string } {
    return {
      paramGroupId: 'ParamGroupId',
      parameterGroupDesc: 'ParameterGroupDesc',
      parameterGroupName: 'ParameterGroupName',
      parameterGroupType: 'ParameterGroupType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      paramGroupId: 'string',
      parameterGroupDesc: 'string',
      parameterGroupName: 'string',
      parameterGroupType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParametersDBInstanceParameter extends $dara.Model {
  parameterDefaultValue?: string;
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  parameterValueRange?: string;
  static names(): { [key: string]: string } {
    return {
      parameterDefaultValue: 'ParameterDefaultValue',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      parameterValueRange: 'ParameterValueRange',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameterDefaultValue: 'string',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      parameterValueRange: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParameters extends $dara.Model {
  DBInstanceParameter?: DescribeParametersResponseBodyRunningParametersDBInstanceParameter[];
  static names(): { [key: string]: string } {
    return {
      DBInstanceParameter: 'DBInstanceParameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceParameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyRunningParametersDBInstanceParameter },
    };
  }

  validate() {
    if(Array.isArray(this.DBInstanceParameter)) {
      $dara.Model.validateArray(this.DBInstanceParameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $dara.Model {
  configParameters?: DescribeParametersResponseBodyConfigParameters;
  engine?: string;
  engineVersion?: string;
  paramGroupInfo?: DescribeParametersResponseBodyParamGroupInfo;
  requestId?: string;
  runningParameters?: DescribeParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      paramGroupInfo: 'ParamGroupInfo',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: DescribeParametersResponseBodyConfigParameters,
      engine: 'string',
      engineVersion: 'string',
      paramGroupInfo: DescribeParametersResponseBodyParamGroupInfo,
      requestId: 'string',
      runningParameters: DescribeParametersResponseBodyRunningParameters,
    };
  }

  validate() {
    if(this.configParameters && typeof (this.configParameters as any).validate === 'function') {
      (this.configParameters as any).validate();
    }
    if(this.paramGroupInfo && typeof (this.paramGroupInfo as any).validate === 'function') {
      (this.paramGroupInfo as any).validate();
    }
    if(this.runningParameters && typeof (this.runningParameters as any).validate === 'function') {
      (this.runningParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

