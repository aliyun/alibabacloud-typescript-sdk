// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAudienceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 23**
   */
  adAccountId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cams-***
   */
  custSpaceId?: string;
  /**
   * @example
   * desc
   */
  description?: string;
  /**
   * @example
   * bucket/file.xlsx
   */
  filePath?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * audience name
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 239***
   */
  pageId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * excel
   */
  uploadType?: string;
  static names(): { [key: string]: string } {
    return {
      adAccountId: 'AdAccountId',
      custSpaceId: 'CustSpaceId',
      description: 'Description',
      filePath: 'FilePath',
      name: 'Name',
      ownerId: 'OwnerId',
      pageId: 'PageId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      uploadType: 'UploadType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      adAccountId: 'string',
      custSpaceId: 'string',
      description: 'string',
      filePath: 'string',
      name: 'string',
      ownerId: 'number',
      pageId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      uploadType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

