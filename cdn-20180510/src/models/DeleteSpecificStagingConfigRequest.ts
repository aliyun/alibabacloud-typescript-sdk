// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteSpecificStagingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration IDs. Separate configuration IDs with commas (,). For more information about ConfigId, see [Usage notes on ConfigId](https://help.aliyun.com/document_detail/388994.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 2317
   */
  configId?: string;
  /**
   * @remarks
   * The accelerated domain name. You can specify up to 50 domain names in each request. Separate multiple domain names with commas (,).
   * 
   * This parameter is required.
   * 
   * @example
   * example.com
   */
  domainName?: string;
  ownerId?: number;
  securityToken?: string;
  static names(): { [key: string]: string } {
    return {
      configId: 'ConfigId',
      domainName: 'DomainName',
      ownerId: 'OwnerId',
      securityToken: 'SecurityToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configId: 'string',
      domainName: 'string',
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

