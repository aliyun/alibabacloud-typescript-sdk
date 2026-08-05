// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchSetLiveDomainConfigsRequest extends $dara.Model {
  /**
   * @remarks
   * The domain names that you want to configure in batches. Valid values: ingest domain names, primary streaming domain names, and secondary streaming domain names. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * demo.aliyundoc.com,example.aliyundoc.com,example.com
   */
  domainNames?: string;
  dryRun?: boolean;
  /**
   * @remarks
   * The list of features.
   * 
   * Some features, such as `filetype_based_ttl_set`, allow you to set multiple records. If you want to update a specific record, you can specify the record by its `configId`. For more information, refer to **Functions format description** and **Functions feature description** below.
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
      dryRun: 'DryRun',
      functions: 'Functions',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainNames: 'string',
      dryRun: 'boolean',
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

