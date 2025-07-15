// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PublishLiveStagingConfigToProductionRequest extends $dara.Model {
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
  /**
   * @remarks
   * The name of the feature. For more information about how to obtain the feature name, see [DescribeLiveDomainStagingConfig](https://help.aliyun.com/document_detail/297374.html).
   * 
   * This parameter is required.
   * 
   * @example
   * aliauth
   */
  functionName?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      domainName: 'DomainName',
      functionName: 'FunctionName',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      domainName: 'string',
      functionName: 'string',
      ownerId: 'number',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

