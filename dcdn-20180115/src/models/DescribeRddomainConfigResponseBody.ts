// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRDDomainConfigResponseBodyDomainConfigsFunctionArgs extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration.
   * 
   * @example
   * source_group_name
   */
  argName?: string;
  /**
   * @remarks
   * The value of the configuration.
   * 
   * @example
   * 123
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

export class DescribeRDDomainConfigResponseBodyDomainConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 6295
   */
  configId?: number;
  /**
   * @remarks
   * The configurations of the features.
   */
  functionArgs?: DescribeRDDomainConfigResponseBodyDomainConfigsFunctionArgs[];
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
   * The ID of the advanced condition configuration.
   * 
   * @example
   * 1234567
   */
  parentId?: string;
  /**
   * @remarks
   * The status. Valid values:
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
      parentId: 'ParentId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'number',
      functionArgs: { 'type': 'array', 'itemType': DescribeRDDomainConfigResponseBodyDomainConfigsFunctionArgs },
      functionName: 'string',
      parentId: 'string',
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

export class DescribeRDDomainConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the domain name.
   */
  domainConfigs?: DescribeRDDomainConfigResponseBodyDomainConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C80705BF-0F76-41FA-BAD1-5B59296A4E59
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
      domainConfigs: { 'type': 'array', 'itemType': DescribeRDDomainConfigResponseBodyDomainConfigs },
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

