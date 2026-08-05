// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLiveDomainStagingConfigResponseBodyDomainConfigsFunctionArgs extends $dara.Model {
  /**
   * @remarks
   * The name of the configuration parameter.
   * 
   * @example
   * auth_type
   */
  argName?: string;
  /**
   * @remarks
   * The value of the configuration parameter.
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

export class DescribeLiveDomainStagingConfigResponseBodyDomainConfigs extends $dara.Model {
  /**
   * @remarks
   * The ID of the configuration.
   * 
   * @example
   * 6295
   */
  configId?: string;
  /**
   * @remarks
   * The configurations of the feature.
   */
  functionArgs?: DescribeLiveDomainStagingConfigResponseBodyDomainConfigsFunctionArgs[];
  /**
   * @remarks
   * The name of the feature.
   * 
   * @example
   * aliauth
   */
  functionName?: string;
  /**
   * @remarks
   * The status of the configuration. Valid values:
   * 
   * - **success**: Successful.
   * 
   * - **testing**: The configuration is being verified.
   * 
   * - **failed**: Failed.
   * 
   * - **configuring**: The configuration is in progress.
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
      functionArgs: { 'type': 'array', 'itemType': DescribeLiveDomainStagingConfigResponseBodyDomainConfigsFunctionArgs },
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

export class DescribeLiveDomainStagingConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name configurations.
   */
  domainConfigs?: DescribeLiveDomainStagingConfigResponseBodyDomainConfigs[];
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
      domainConfigs: { 'type': 'array', 'itemType': DescribeLiveDomainStagingConfigResponseBodyDomainConfigs },
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

