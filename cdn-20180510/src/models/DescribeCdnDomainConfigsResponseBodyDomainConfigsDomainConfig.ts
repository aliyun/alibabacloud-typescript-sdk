// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs } from "./DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs";


export class DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfig extends $dara.Model {
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
   * The configuration of each feature.
   */
  functionArgs?: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs;
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
   * The ID of the rule condition. This parameter is optional.
   * 
   * To create a rule condition, you can configure the **condition** feature that is described in the [Parameters for configuring features for domain names](https://help.aliyun.com/document_detail/388460.html) topic. A rule condition can identify parameters that are included in requests and filter requests based on the identified parameters. Each rule condition has a [ConfigId](https://help.aliyun.com/document_detail/388994.html). You can use ConfigId as ParentId that is referenced by other features. This way, you can combine rule conditions and features for flexible configurations.
   * 
   * For more information, see [BatchSetCdnDomainConfig](https://help.aliyun.com/document_detail/90915.html) or ParentId configuration example in this topic.
   * 
   * @example
   * 222728944812032
   */
  parentId?: string;
  /**
   * @remarks
   * The status of the configuration. Valid values:
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
      configId: 'string',
      functionArgs: DescribeCdnDomainConfigsResponseBodyDomainConfigsDomainConfigFunctionArgs,
      functionName: 'string',
      parentId: 'string',
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

