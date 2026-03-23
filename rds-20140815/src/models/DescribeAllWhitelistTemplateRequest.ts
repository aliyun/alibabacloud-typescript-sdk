// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAllWhitelistTemplateRequest extends $dara.Model {
  fuzzySearch?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  maxRecordsPerPage?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  pageNumbers?: number;
  regionId?: string;
  resourceGroupId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      fuzzySearch: 'FuzzySearch',
      maxRecordsPerPage: 'MaxRecordsPerPage',
      pageNumbers: 'PageNumbers',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fuzzySearch: 'boolean',
      maxRecordsPerPage: 'number',
      pageNumbers: 'number',
      regionId: 'string',
      resourceGroupId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      templateName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

