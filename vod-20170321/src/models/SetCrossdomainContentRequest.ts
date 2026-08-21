// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SetCrossdomainContentRequest extends $dara.Model {
  /**
   * @remarks
   * The content of the cross-domain file. The content is in XML format and cannot exceed 2,048 characters.
   * 
   * This parameter is required.
   * 
   * @example
   * &lt;cross-domain-policy&gt;&lt;allow-access-from domain="*"/&gt;&lt;allow-http-request-headers-from domain="*" headers="*" secure="false"/&gt;&lt;/cross-domain-policy&gt;
   */
  content?: string;
  ownerAccount?: string;
  ownerId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: string;
  /**
   * @remarks
   * The ID of the resource owner.
   * 
   * @example
   * 3461111
   */
  resourceRealOwnerId?: string;
  /**
   * @remarks
   * The OSS storage address.
   * 
   * This parameter is required.
   * 
   * @example
   * outin-67870fd5b****1e98a3900163e1c35d5.oss-cn-shanghai.aliyuncs.com
   */
  storageLocation?: string;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceRealOwnerId: 'ResourceRealOwnerId',
      storageLocation: 'StorageLocation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      ownerAccount: 'string',
      ownerId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'string',
      resourceRealOwnerId: 'string',
      storageLocation: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

