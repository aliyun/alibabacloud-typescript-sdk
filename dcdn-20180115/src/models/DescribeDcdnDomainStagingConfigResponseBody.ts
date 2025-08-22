// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDcdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs extends $dara.Model {
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
   * The value of the configuration.
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

export class DescribeDcdnDomainStagingConfigResponseBodyDomainConfigs extends $dara.Model {
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
   * The following table describes the features.
   */
  functionArgs?: DescribeDcdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs[];
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
   * The status. Valid values:
   * 
   * *   success: The configuration is successful.
   * *   testing: The configuration is under testing.
   * *   failed: The task failed.
   * *   configuring: The feature is being configured.
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
      functionArgs: { 'type': 'array', 'itemType': DescribeDcdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs },
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

export class DescribeDcdnDomainStagingConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configurations of accelerated domain names returned.
   */
  domainConfigs?: DescribeDcdnDomainStagingConfigResponseBodyDomainConfigs[];
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
      domainConfigs: { 'type': 'array', 'itemType': DescribeDcdnDomainStagingConfigResponseBodyDomainConfigs },
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

