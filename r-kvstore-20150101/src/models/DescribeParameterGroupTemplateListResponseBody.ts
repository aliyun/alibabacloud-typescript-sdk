// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeParameterGroupTemplateListResponseBodyParameters extends $dara.Model {
  /**
   * @remarks
   * The regular expression used to validate input.
   * 
   * @example
   * "\\\\d+\\\\s+\\\\d+\\\\s+\\\\d+"
   */
  checkingCode?: string;
  /**
   * @remarks
   * Indicates whether the modification takes effect. Valid values: 0 and 1. A value of 0 indicates that the modification does not take effect. A value of 1 indicates that the modification takes effect.
   * 
   * @example
   * 1
   */
  effective?: number;
  /**
   * @remarks
   * A divisor of the parameter. For a parameter of the integer or byte type, the valid values must be a multiple of Factor unless you set Factor to 0.
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
   * Open AOF persistence mode
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
   * *   **0: The parameter cannot be modified.**
   * *   **1**: The parameter can be modified.
   * 
   * @example
   * 0
   */
  revisable?: number;
  /**
   * @remarks
   * Indicates whether the minor version can be changed. Valid values: true and false.
   * 
   * @example
   * true
   */
  supportModifyForMinorVersion?: boolean;
  /**
   * @remarks
   * The unit of the parameter value. Valid values: INT (ordinary integer), STRING (fixed string), and B (byte).
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
   * The compatible engine version. Valid values:
   * 
   * Redis Open Source Edition: 5.0, 6.0, and 7.0. Tair DRAM-based instances: 5.0 and 6.0. Tair persistent memory-optimized instances: 6.0. Tair ESSD-based instances: 4.0.
   * 
   * @example
   * 5
   */
  engineVersion?: string;
  /**
   * @remarks
   * The information about parameters.
   */
  parameters?: DescribeParameterGroupTemplateListResponseBodyParameters[];
  /**
   * @remarks
   * Id of the request
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

