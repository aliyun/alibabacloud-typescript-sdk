// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetDcdnDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain names. Specify multiple accelerated domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com,example.org
   */
  domainNames?: string;
  /**
   * @remarks
   * The features that you want to configure. Format:
   * 
   * *   **functionName**: The name of the feature. Separate multiple values with commas (,). For more information, see [A list of features](https://help.aliyun.com/document_detail/410622.html).
   * 
   * *   **argName**: The feature parameters for **functionName**.
   * *   **argValue**: The parameter values set for **functionName**.
   * *   **parentid**: the rule ID. This parameter is optional. You can use the **condition** rules engine to create a rule. For information, see [Feature settings for domain names](https://help.aliyun.com/document_detail/388460.html). A rule can identify parameters that are included in requests and filter requests based on the identified parameters. After you create a rule, a [configid](https://help.aliyun.com/document_detail/388994.html) is generated. A configid can be used as parentId that is referenced by other features. This way, you can combine rules and features for flexible configurations.
   * 
   * If the **parentId** parameter is **-1**, the existing rules in the configurations are deleted.
   * 
   * ````[
   *  {
   *    "functionArgs": [
   *     {
   *      "argName": "Parameter A", 
   *      "argValue": Value of parameter A"
   *     }, 
   *   {
   *     "argName": "Parameter B", 
   *     "argValue": "Value of Parameter B"
   *      }
   *  ], 
   *  "functionName": "Feature name"
   *     }
   * ]```
   * ````
   * 
   * This parameter is required.
   * 
   * @example
   * [{"functionArgs":[{"argName":"switch","argValue":"on"},{"argName":"region","argValue":"*"}],"functionName":"ipv6"}]
   */
  functions?: string;
  ownerAccount?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      domainNames: 'DomainNames',
      functions: 'Functions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      functions: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      securityToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

