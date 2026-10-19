// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupTemplateListResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The value range of the parameter.
   * 
   * @example
   * [0|1]
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the parameter has taken effect. Valid values:
   * * **0**: No.
   * * **1**: Yes.
   * 
   * @example
   * 1
   */
  effective?: number;
  /**
   * @remarks
   * The divisor factor. For integer and byte type parameters, the parameter value must not only fall within the valid range but also be a multiple of Factor (when Factor is not 0).
   * 
   * @example
   * 1
   */
  factor?: number;
  /**
   * @remarks
   * The parameter description.
   * 
   * @example
   * Enable AOF persistence mode
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * appendonly
   */
  parameterName?: string;
  /**
   * @remarks
   * The default value of the parameter.
   * 
   * @example
   * 10
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
   * @remarks
   * Indicates whether modification for minor versions is supported. Valid values:
   * * **true**: Supported.
   * * **false**: Not supported.
   * 
   * @example
   * true
   */
  supportModifyForMinorVersion?: boolean;
  /**
   * @remarks
   * The unit of the parameter value. Valid values:
   * * **INT**: a common integer.
   * * **STRING**: a fixed string.
   * * **B**: bytes.
   * 
   * @example
   * STRING
   */
  unit?: string;
  static names(): { [key: string]: string } {
    return {
      checkingCode: 'CheckingCode',
      effective: 'Effective',
      factor: 'Factor',
      parameterDescription: 'ParameterDescription',
      parameterName: 'ParameterName',
      parameterValue: 'ParameterValue',
      revisable: 'Revisable',
      supportModifyForMinorVersion: 'SupportModifyForMinorVersion',
      unit: 'Unit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkingCode: 'string',
      effective: 'number',
      factor: 'number',
      parameterDescription: 'string',
      parameterName: 'string',
      parameterValue: 'string',
      revisable: 'number',
      supportModifyForMinorVersion: 'boolean',
      unit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeParameterGroupTemplateListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The compatible version.
   * 
   * @example
   * 5
   */
  engineVersion?: string;
  /**
   * @remarks
   * The list of parameter details.
   */
  parameters?: DescribeParameterGroupTemplateListResponseBodyParameters[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 5D622714-AEDD-4609-9167-F5DDD3D1****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engineVersion: 'EngineVersion',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engineVersion: 'string',
      parameters: { 'type': 'array', 'itemType': DescribeParameterGroupTemplateListResponseBodyParameters },
      requestId: 'string',
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

