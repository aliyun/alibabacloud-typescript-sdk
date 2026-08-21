// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetVodDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The accelerated domain names for ApsaraVideo VOD. Separate multiple domain names with commas (,). You can configure up to 50 domain names at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainNames?: string;
  /**
   * @remarks
   * The list of features.
   * - functionName (feature name, required): For the features that can be configured and their feature name parameters, see [Domain name configuration features](https://help.aliyun.com/document_detail/2411639.html).
   * - argName (parameter name, required): The configuration items of functionName. You can configure multiple configuration items.
   * - argValue (parameter value, required): The values of the configuration items of functionName.
   * 
   * For detailed information about the features that can be configured for accelerated domain names, including feature names and parameter names, see [Domain name configuration features](https://help.aliyun.com/document_detail/2411639.html).
   * 
   * > Some features, such as filetype_based_ttl_set (file expiration time), support multiple configuration rules. To update a specific configuration rule, specify the configId of that rule. Example:
   * `[{"functionArgs":[{"argName":"file_type","argValue":"jpg"},{"argName":"ttl","argValue":"18"},{"argName":"weight","argValue":"30"}],"functionName":"filetype_based_ttl_set","configId":5068995}]`
   * 
   * This parameter is required.
   * 
   * @example
   * [{"functionArgs":[{"argName":"domain_name","argValue":"www.example.com"}],"functionName":"set_req_host_header"}]
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

