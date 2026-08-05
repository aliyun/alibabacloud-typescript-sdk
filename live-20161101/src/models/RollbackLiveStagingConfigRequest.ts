// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RollbackLiveStagingConfigRequest extends $dara.Model {
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
   * The name of the feature. To obtain the feature name, call the [DescribeLiveDomainStagingConfig](https://help.aliyun.com/document_detail/297374.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * aliauth
   */
  functionName?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region.
   * 
   * @example
   * cn-shanghai
   */
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

