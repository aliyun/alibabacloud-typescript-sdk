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
   * Specifies whether the parameter takes effect. Valid values:
   * * **0**: No.
   * * **1**: Yes.
   * 
   * @example
   * 1
   */
  effective?: number;
  /**
   * @remarks
   * The divisibility factor. For integer and byte parameters, the parameter value must not only fall within the valid value range but also be a multiple of the factor (which cannot be 0).
   * 
   * @example
   * 1
   */
  factor?: number;
  /**
   * @remarks
   * The description of the parameter.
   * 
   * @example
   * Enable the AOF persistence mode
   */
  parameterDescription?: string;
  /**
   * @remarks
   * The name of the parameter.
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
   * Specifies whether the parameter can be modified. Valid values:
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
   * Specifies whether the minor version can be modified. Valid values:
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
   * * **INT**: Standard integer.
   * * **STRING**: Fixed string.
   * * **B**: Byte.
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

