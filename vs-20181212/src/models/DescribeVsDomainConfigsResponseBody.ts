// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs extends $dara.Model {
  /**
   * @example
   * auth_type
   */
  argName?: string;
  /**
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
   * @example
   * 6295
   */
  configId?: string;
  functionArgs?: DescribeVsDomainConfigsResponseBodyDomainConfigsFunctionArgs[];
  /**
   * @example
   * aliauth
   */
  functionName?: string;
  /**
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
  domainConfigs?: DescribeVsDomainConfigsResponseBodyDomainConfigs[];
  /**
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

