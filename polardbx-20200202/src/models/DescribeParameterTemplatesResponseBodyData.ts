// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterTemplatesResponseBodyDataParameters } from "./DescribeParameterTemplatesResponseBodyDataParameters";


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

