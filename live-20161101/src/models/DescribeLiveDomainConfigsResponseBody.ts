// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg extends $dara.Model {
  /**
   * @remarks
   * The name of the attribute.
   * 
   * @example
   * domain_name
   */
  argName?: string;
  /**
   * @remarks
   * The attribute value.
   * 
   * @example
   * developer.aliyundoc.com
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

export class DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs extends $dara.Model {
  functionArg?: DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg[];
  static names(): { [key: string]: string } {
    return {
      functionArg: 'FunctionArg',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionArg: { 'type': 'array', 'itemType': DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgsFunctionArg },
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

export class DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfig extends $dara.Model {
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
   * The attributes of the feature.
   */
  functionArgs?: DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
  /**
   * @remarks
   * The name of the feature.
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
      functionArgs: DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
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

export class DescribeLiveDomainConfigsResponseBodyDomainConfigs extends $dara.Model {
  domainConfig?: DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfig[];
  static names(): { [key: string]: string } {
    return {
      domainConfig: 'DomainConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfig: { 'type': 'array', 'itemType': DescribeLiveDomainConfigsResponseBodyDomainConfigsDomainConfig },
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

export class DescribeLiveDomainConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of the domain name.
   */
  domainConfigs?: DescribeLiveDomainConfigsResponseBodyDomainConfigs;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8AA0364-0FDB-4AD5-AC74-D69FAB8924ED
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
      domainConfigs: DescribeLiveDomainConfigsResponseBodyDomainConfigs,
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

