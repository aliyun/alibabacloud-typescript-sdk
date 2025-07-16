// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterTemplatesResponseBodyDataParameters extends $dara.Model {
  /**
   * @example
   * [0|1]
   */
  checkingCode?: string;
  /**
   * @example
   * 0
   */
  dynamic?: number;
  /**
   * @example
   * polarx hatp addition param
   */
  parameterDescription?: string;
  /**
   * @example
   * loose_enable_gts
   */
  parameterName?: string;
  /**
   * @example
   * 1
   */
  parameterValue?: string;
  /**
   * @example
   * 0
   */
  revisable?: number;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      dynamic: 'Dynamic',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      revisable: 'Revisable',
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
   * @example
   * polarx
   */
  engine?: string;
  /**
   * @example
   * 2.0
   */
  engineVersion?: string;
  /**
   * @example
   * 218
   */
  parameterCount?: number;
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
  data?: DescribeParameterTemplatesResponseBodyData;
  /**
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

