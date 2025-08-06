// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMediaAuditAudioResultDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the video. You can query the video ID by using the ApsaraVideo VOD console or calling the [SearchMedia](https://help.aliyun.com/document_detail/86044.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 93ab850b4f6f*****54b6e91d24d81d4
   */
  mediaId?: string;
  ownerAccount?: string;
  ownerId?: string;
  /**
   * @remarks
   * The number of the page to return. This parameter is optional. If you do not specify this parameter, all results are returned without pagination.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  static names(): { [key: string]: string } {
    return {
      mediaId: 'MediaId',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNo: 'PageNo',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaId: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      pageNo: 'number',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

