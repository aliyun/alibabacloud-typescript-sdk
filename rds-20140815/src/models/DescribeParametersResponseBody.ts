// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParametersResponseBodyConfigParameters } from "./DescribeParametersResponseBodyConfigParameters";
import { DescribeParametersResponseBodyParamGroupInfo } from "./DescribeParametersResponseBodyParamGroupInfo";
import { DescribeParametersResponseBodyRunningParameters } from "./DescribeParametersResponseBodyRunningParameters";


export class DescribeParametersResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of parameters that are being synchronized.
   * 
   * > After you modify and submit the parameters, you must wait for the parameters to be synchronized to the instance. After the synchronization, you can delete the parameters from the list.
   */
  configParameters?: DescribeParametersResponseBodyConfigParameters;
  /**
   * @remarks
   * The type of the database engine.
   * 
   * @example
   * MySQL
   */
  engine?: string;
  /**
   * @remarks
   * The version of the database engine.
   * 
   * @example
   * 5.5
   */
  engineVersion?: string;
  /**
   * @remarks
   * The information about the parameter template.
   */
  paramGroupInfo?: DescribeParametersResponseBodyParamGroupInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  /**
   * @remarks
   * The parameters that are in use.
   */
  runningParameters?: DescribeParametersResponseBodyRunningParameters;
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      paramGroupInfo: 'ParamGroupInfo',
      requestId: 'RequestId',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: DescribeParametersResponseBodyConfigParameters,
      engine: 'string',
      engineVersion: 'string',
      paramGroupInfo: DescribeParametersResponseBodyParamGroupInfo,
      requestId: 'string',
      runningParameters: DescribeParametersResponseBodyRunningParameters,
    };
  }

  validate() {
    if(this.configParameters && typeof (this.configParameters as any).validate === 'function') {
      (this.configParameters as any).validate();
    }
    if(this.paramGroupInfo && typeof (this.paramGroupInfo as any).validate === 'function') {
      (this.paramGroupInfo as any).validate();
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

