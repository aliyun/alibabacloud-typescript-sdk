// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterTemplatesResponseBodyParameters } from "./DescribeParameterTemplatesResponseBodyParameters";


export class DescribeParameterTemplatesResponseBody extends $dara.Model {
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
   * The version of the database engine.
   * 
   * @example
   * 8.0
   */
  engineVersion?: string;
  /**
   * @remarks
   * The number of parameters.
   * 
   * @example
   * 2
   */
  parameterCount?: string;
  /**
   * @remarks
   * The details of the parameters.
   */
  parameters?: DescribeParameterTemplatesResponseBodyParameters;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0F9B7410-EC73-510C-B385-8339455C12C6
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      parameterCount: 'ParameterCount',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      engine: 'string',
      engineVersion: 'string',
      parameterCount: 'string',
      parameters: DescribeParameterTemplatesResponseBodyParameters,
      requestId: 'string',
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

