// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateCustomAudienceRequest extends $dara.Model {
  /**
   * @remarks
   * The Meta ad account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 23**
   */
  adAccountId?: string;
  /**
   * @remarks
   * The SpaceId or instance ID of the ISV sub-customer. This is the channel ID, which you can view on the <props="china">[Channel Management](https://chatapp.console.aliyun.com/ChannelsManagement)<props="intl">[Channel Management](https://chatapp.console.alibabacloud.com/CustomerList) page.
   * 
   * This parameter is required.
   * 
   * @example
   * cams-***
   */
  custSpaceId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * desc
   */
  description?: string;
  /**
   * @remarks
   * The file path.
   * 
   * @example
   * bucket/file.xlsx
   */
  filePath?: string;
  /**
   * @remarks
   * The name of the custom audience.
   * 
   * This parameter is required.
   * 
   * @example
   * audience name
   */
  name?: string;
  ownerId?: number;
  /**
   * @remarks
   * The Page ID of Messenger.
   * 
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
   * The user upload type.
   * 
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

