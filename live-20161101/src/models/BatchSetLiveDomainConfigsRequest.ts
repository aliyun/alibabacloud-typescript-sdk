// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetLiveDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names that you want to batch configure. Supported domain names include ingest domains, main streaming domains, and sub-streaming domains. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com,example.aliyundoc.com,example.com
   */
  domainNames?: string;
  /**
   * @remarks
   * The list of features.
   * 
   * Some features, such as `filetype_based_ttl_set`, support multiple configuration records. To update one of the configuration records, use `configId` to identify the record. For more information, see **Format of the Functions parameter** and **Features specified by the Functions parameter**.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"functionArgs":[{"argName":"file_type","argValue":"jpg"},{"argName":"ttl","argValue":"18"},{"argName":"weight","argValue":"30"}],"functionName":"filetype_based_ttl_set","configId":506***}]
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

