// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParametersResponseBodyConfigParametersParameter extends $dara.Model {
  checkingCode?: string;
  forceRestart?: boolean;
  modifiableStatus?: boolean;
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      forceRestart: 'ForceRestart',
      modifiableStatus: 'ModifiableStatus',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      forceRestart: 'boolean',
      modifiableStatus: 'boolean',
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
  parameter?: DescribeParametersResponseBodyConfigParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyConfigParametersParameter },
    };
  }

  validate() {
    if(Array.isArray(this.parameter)) {
      $dara.Model.validateArray(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBodyRunningParametersParameter extends $dara.Model {
  characterType?: string;
  checkingCode?: string;
  forceRestart?: string;
  modifiableStatus?: string;
  parameterDescription?: string;
  parameterName?: string;
  parameterValue?: string;
  static names(): { [key: string]: string } {
    return {
      characterType: 'CharacterType',
      checkingCode: 'CheckingCode',
      forceRestart: 'ForceRestart',
      modifiableStatus: 'ModifiableStatus',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      characterType: 'string',
      checkingCode: 'string',
      forceRestart: 'string',
      modifiableStatus: 'string',
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

export class DescribeParametersResponseBodyRunningParameters extends $dara.Model {
  parameter?: DescribeParametersResponseBodyRunningParametersParameter[];
  static names(): { [key: string]: string } {
    return {
      parameter: 'Parameter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parameter: { 'type': 'array', 'itemType': DescribeParametersResponseBodyRunningParametersParameter },
    };
  }

  validate() {
    if(Array.isArray(this.parameter)) {
      $dara.Model.validateArray(this.parameter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParametersResponseBody extends $dara.Model {
  configParameters?: DescribeParametersResponseBodyConfigParameters;
  /**
   * @remarks
   * The database engine of the instance. Default value: **mongodb**.
   * 
   * @example
   * mongodb
   */
  engine?: string;
  /**
   * @remarks
   * The database engine version of the instance.
   * 
   * @example
   * 4.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3ADD0C7D-2D2A-4F15-88FF-E7AC9B9FDCC8
   */
  requestId?: string;
  runningParameters?: DescribeParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: DescribeParametersResponseBodyConfigParameters,
      engine: 'string',
      engineVersion: 'string',
      requestId: 'string',
      runningParameters: DescribeParametersResponseBodyRunningParameters,
    };
  }

  validate() {
    if(this.configParameters && typeof (this.configParameters as any).validate === 'function') {
      (this.configParameters as any).validate();
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

