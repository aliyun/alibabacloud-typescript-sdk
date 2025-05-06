// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeDBClusterParametersResponseBodyParameters } from "./DescribeDbclusterParametersResponseBodyParameters";
import { DescribeDBClusterParametersResponseBodyRunningParameters } from "./DescribeDbclusterParametersResponseBodyRunningParameters";


export class DescribeDBClusterParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the cluster.
   * 
   * @example
   * pc-bp1s826a1up******
   */
  DBClusterId?: string;
  /**
   * @remarks
   * The database engine that the clusters runs. Valid values:
   * 
   * *   **MySQL**
   * *   **PostgreSQL**
   * *   **Oracle**
   * 
   * @example
   * MySQL
   */
  DBType?: string;
  /**
   * @remarks
   * The version of the database engine. 
   * 
   * - Valid values for the MySQL database engine:   
   *   - **5.6**
   *   - **5.7**
   *   - **8.0**
   * - Valid value for the PostgreSQL database engine:    
   *   - **11**
   *   - **14**
   * - Valid value for the Oracle database engine:  **11**
   * 
   * @example
   * 5.6
   */
  DBVersion?: string;
  /**
   * @remarks
   * The cluster engine.
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
   * 1
   */
  parameterNumbers?: string;
  /**
   * @remarks
   * A comparison of parameters between the source RDS instance and the destination PolarDB cluster.
   */
  parameters?: DescribeDBClusterParametersResponseBodyParameters;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * EBEAA83D-1734-42E3-85E3-E25F6E******
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters of the PolarDB cluster.
   */
  runningParameters?: DescribeDBClusterParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      DBClusterId: 'DBClusterId',
      DBType: 'DBType',
      DBVersion: 'DBVersion',
      engine: 'Engine',
      parameterNumbers: 'ParameterNumbers',
      parameters: 'Parameters',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBClusterId: 'string',
      DBType: 'string',
      DBVersion: 'string',
      engine: 'string',
      parameterNumbers: 'string',
      parameters: DescribeDBClusterParametersResponseBodyParameters,
      requestId: 'string',
      runningParameters: DescribeDBClusterParametersResponseBodyRunningParameters,
    };
  }

  validate() {
    if(this.parameters && typeof (this.parameters as any).validate === 'function') {
      (this.parameters as any).validate();
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

