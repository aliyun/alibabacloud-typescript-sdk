// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParameterTemplatesResponseBodyParameters } from "./DescribeParameterTemplatesResponseBodyParameters";


export class DescribeParameterTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 5.7
   */
  DBVersion?: string;
  /**
   * @remarks
   * The database engine of the cluster.
   * 
   * @example
   * POLARDB
   */
  engine?: string;
  /**
   * @remarks
   * The number of parameters.
   * 
   * @example
   * 183
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
   * D963934D-8605-4473-8EAC-54C719******
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      parameterCount: 'ParameterCount',
      parameters: 'Parameters',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBType: 'string',
      DBVersion: 'string',
      engine: 'string',
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

