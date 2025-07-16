// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs extends $dara.Model {
  /**
   * @remarks
   * The configuration name.
   * 
   * @example
   * auth_type
   */
  argName?: string;
  /**
   * @remarks
   * The configuration value.
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

export class DescribeCdnDomainStagingConfigResponseBodyDomainConfigs extends $dara.Model {
  /**
   * @remarks
   * The configuration ID.
   * 
   * @example
   * 6xx5
   */
  configId?: string;
  /**
   * @remarks
   * The description of each feature.
   */
  functionArgs?: DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs[];
  /**
   * @remarks
   * The feature name.
   * 
   * @example
   * aliauth
   */
  functionName?: string;
  /**
   * @remarks
   * The rule condition ID. This parameter is optional. To create a rule condition, you can configure the **condition** feature that is described in the [Parameters for configuring features for domain names](https://help.aliyun.com/document_detail/388460.html) topic. A rule condition can identify parameters that are included in requests and filter requests based on the identified parameters. Each rule condition has a [ConfigId](https://help.aliyun.com/document_detail/388994.html). You can reference ConfigId instead of ParentId in other features. This way, you can combine rule conditions and features for flexible configurations. For more information, see [BatchSetCdnDomainConfig](https://help.aliyun.com/document_detail/90915.html) or ParentId configuration example in this topic.
   * 
   * @example
   * 222728944812032
   */
  parentId?: string;
  /**
   * @remarks
   * The configuration status. Valid values:
   * 
   * *   **testing**
   * *   **configuring**
   * *   **success**
   * *   **failed**
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
      configId: 'string',
      functionArgs: { 'type': 'array', 'itemType': DescribeCdnDomainStagingConfigResponseBodyDomainConfigsFunctionArgs },
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

export class DescribeCdnDomainStagingConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The domain name configurations.
   */
  domainConfigs?: DescribeCdnDomainStagingConfigResponseBodyDomainConfigs[];
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C80705BF-0F76-41FA-BAD1-5B59296A4E59
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      domainConfigs: 'DomainConfigs',
      domainName: 'DomainName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainConfigs: { 'type': 'array', 'itemType': DescribeCdnDomainStagingConfigResponseBodyDomainConfigs },
      domainName: 'string',
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

