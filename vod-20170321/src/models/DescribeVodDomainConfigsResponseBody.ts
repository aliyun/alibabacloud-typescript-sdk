// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $dara.Model {
  /**
   * @remarks
   * The parameter name.
   * 
   * @example
   * file_type
   */
  argName?: string;
  /**
   * @remarks
   * The parameter value.
   * 
   * @example
   * txt
   */
  argValue?: string;
  static names(): { [key: string]: string } {
    return {
      argName: 'ArgName',
      argValue: 'ArgValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      argName: 'string',
      argValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $dara.Model {
  functionArg?: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
    };
  }

  validate() {
    if(Array.isArray(this.functionArg)) {
      $dara.Model.validateArray(this.functionArg);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfig extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 5003576
   */
  configId?: string;
  /**
   * @remarks
   * The feature parameters.
   */
  functionArgs?: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * set_req_host_header
   */
  functionName?: string;
  /**
   * @remarks
   * The configuration status. Valid values:
   * 
   * *   **success**
   * *   **testing**
   * *   **failed**
   * *   **configuring**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      functionArgs: 'FunctionArgs',
      functionName: 'FunctionName',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      functionArgs: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
      functionName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.functionArgs && typeof (this.functionArgs as any).validate === 'function') {
      (this.functionArgs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBodyDomainConfigs extends $dara.Model {
  domainConfig?: DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeVodDomainConfigsResponseBodyDomainConfigsDomainConfig },
    };
  }

  validate() {
    if(Array.isArray(this.domainConfig)) {
      $dara.Model.validateArray(this.domainConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVodDomainConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name.
   */
  domainConfigs?: DescribeVodDomainConfigsResponseBodyDomainConfigs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8AA0364-0FDB-4AD5-****-D69FAB8924ED
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: DescribeVodDomainConfigsResponseBodyDomainConfigs,
      requestId: 'string',
    };
  }

  validate() {
    if(this.domainConfigs && typeof (this.domainConfigs as any).validate === 'function') {
      (this.domainConfigs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

