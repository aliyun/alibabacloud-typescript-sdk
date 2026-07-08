// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * auth_type
   */
  argName?: string;
  /**
   * @remarks
   * The argument value.
   * 
   * @example
   * req_auth
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

export class DescribeVsDomainConfigsResponseBodyDomainConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 6295
   */
  configId?: string;
  /**
   * @remarks
   * Each function.
   */
  functionArgs?: DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs[];
  /**
   * @remarks
   * The function name.
   * 
   * @example
   * aliauth
   */
  functionName?: string;
  /**
   * @remarks
   * Status. Valid values:
   * 
   * - success
   * 
   * - testing
   * 
   * - failed
   * 
   * - configuring
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
      functionArgs: { 'type': 'array', 'itemType': DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs },
      functionName: 'string',
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.functionArgs)) {
      $dara.Model.validateArray(this.functionArgs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVsDomainConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Domain name configurations.
   */
  domainConfigs?: DescribeVsDomainConfigsResponseBodyDomainConfigs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * D94D0E1E-E71B-562D-8C18-969BB3653FBD
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
      domainConfigs: { 'type': 'array', 'itemType': DescribeVsDomainConfigsResponseBodyDomainConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domainConfigs)) {
      $dara.Model.validateArray(this.domainConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

