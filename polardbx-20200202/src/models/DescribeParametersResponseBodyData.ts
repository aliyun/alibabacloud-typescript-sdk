// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeParametersResponseBodyDataConfigParameters } from "./DescribeParametersResponseBodyDataConfigParameters";
import { DescribeParametersResponseBodyDataRunningParameters } from "./DescribeParametersResponseBodyDataRunningParameters";


export class DescribeParametersResponseBodyData extends $dara.Model {
  configParameters?: DescribeParametersResponseBodyDataConfigParameters[];
  DBInstanceId?: string;
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
  runningParameters?: DescribeParametersResponseBodyDataRunningParameters[];
  static names(): { [key: string]: string } {
    return {
      configParameters: 'ConfigParameters',
      DBInstanceId: 'DBInstanceId',
      engine: 'Engine',
      engineVersion: 'EngineVersion',
      runningParameters: 'RunningParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configParameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyDataConfigParameters },
      DBInstanceId: 'string',
      engine: 'string',
      engineVersion: 'string',
      runningParameters: { 'type': 'array', 'itemType': DescribeParametersResponseBodyDataRunningParameters },
    };
  }

  validate() {
    if(Array.isArray(this.configParameters)) {
      $dara.Model.validateArray(this.configParameters);
    }
    if(Array.isArray(this.runningParameters)) {
      $dara.Model.validateArray(this.runningParameters);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

