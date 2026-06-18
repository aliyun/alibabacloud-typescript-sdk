// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesResponseBodyDataParameters extends $dara.Model {
  /**
   * @remarks
   * The validation constraint.
   * 
   * @example
   * [0|1]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the parameter is dynamic. Valid values:
   * 
   * - **0**: No.
   * - **1**: Yes.
   * 
   * @example
   * 0
   */
  dynamic?: number;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * polarx hatp addition param
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * loose_enable_gts
   */
  parameterName?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * 1
   */
  parameterValue?: string;
  /**
   * @remarks
   * Indicates whether the parameter can be modified. Valid values:
   * 
   * - **0**: The parameter cannot be modified.
   * - **1**: The parameter can be modified.
   * 
   * @example
   * 0
   */
  revisable?: number;
  /**
   * @example
   * 0
   */
  userChangable?: number;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      dynamic: 'Dynamic',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      revisable: 'Revisable',
      userChangable: 'UserChangable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      dynamic: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      revisable: 'number',
      userChangable: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The engine. Default value: polarx.
   * 
   * @example
   * polarx
   */
  engine?: string;
  /**
   * @remarks
   * The DPI engine version. Default value: 2.0.
   * 
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The number of parameters.
   * 
   * @example
   * 218
   */
  parameterCount?: number;
  /**
   * @remarks
   * The parameter list.
   */
  parameters?: DescribeParameterTemplatesResponseBodyDataParameters[];
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      parameterCount: 'ParameterCount',
      parameters: 'Parameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      parameterCount: 'number',
      parameters: { 'type': 'array', 'itemType': DescribeParameterTemplatesResponseBodyDataParameters },
    };
  }

  validate() {
    if(Array.isArray(this.parameters)) {
      $dara.Model.validateArray(this.parameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data struct.
   */
  data?: DescribeParameterTemplatesResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C458B1E8-1683-3645-B154-6BA32080EEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: DescribeParameterTemplatesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

