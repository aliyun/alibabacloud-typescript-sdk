// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeClientConfSetupResponseBodyClientConf extends $dara.Model {
  /**
   * @remarks
   * The configurations of the usage for the Security Center agent.
   * 
   * @example
   * {"mem":"200","cpu":"10","cpu_all":"0"}
   */
  config?: string;
  /**
   * @remarks
   * The tag that is added to the configuration.
   * 
   * @example
   * machineResource
   */
  strategyTag?: string;
  /**
   * @remarks
   * The value of the tag. Valid values:
   * 
   * *   major
   * *   advanced
   * *   basic
   * 
   * @example
   * major
   */
  strategyTagValue?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      strategyTag: 'StrategyTag',
      strategyTagValue: 'StrategyTagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      strategyTag: 'string',
      strategyTagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeClientConfSetupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the Security Center agent.
   */
  clientConf?: DescribeClientConfSetupResponseBodyClientConf;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 151F6EB6-D5F3-417A-AF7B-4D84975D****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      clientConf: 'ClientConf',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clientConf: DescribeClientConfSetupResponseBodyClientConf,
      requestId: 'string',
    };
  }

  validate() {
    if(this.clientConf && typeof (this.clientConf as any).validate === 'function') {
      (this.clientConf as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

