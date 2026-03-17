// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDpiSignaturesRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the application group.
   * 
   * @example
   * 20
   */
  dpiGroupId?: string;
  /**
   * @example
   * 235
   */
  dpiSignatureIds?: string[];
  /**
   * @example
   * EdgeCast
   */
  dpiSignatureNames?: string[];
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Valid values: **1** to **100**.
   * 
   * Default value: **20**.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token used to query the next page.
   * 
   * @example
   * caeba0bbb2****
   */
  nextToken?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The ID of the region to which the application or application group belongs.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/69813.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      dpiGroupId: 'DpiGroupId',
      dpiSignatureIds: 'DpiSignatureIds',
      dpiSignatureNames: 'DpiSignatureNames',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dpiGroupId: 'string',
      dpiSignatureIds: { 'type': 'array', 'itemType': 'string' },
      dpiSignatureNames: { 'type': 'array', 'itemType': 'string' },
      maxResults: 'number',
      nextToken: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.dpiSignatureIds)) {
      $dara.Model.validateArray(this.dpiSignatureIds);
    }
    if(Array.isArray(this.dpiSignatureNames)) {
      $dara.Model.validateArray(this.dpiSignatureNames);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

