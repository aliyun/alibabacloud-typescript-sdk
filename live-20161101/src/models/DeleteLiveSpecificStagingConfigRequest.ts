// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveSpecificStagingConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The configuration ID. To specify multiple IDs, separate them with commas (,). To obtain the configuration ID, see [DescribeLiveDomainStagingConfig](https://help.aliyun.com/document_detail/2848231.html).
   * 
   * This parameter is required.
   * 
   * @example
   * 6295
   */
  configId?: string;
  /**
   * @remarks
   * The accelerated domain name.
   * 
   * This parameter is required.
   * 
   * @example
   * developer.aliyundoc.com
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

