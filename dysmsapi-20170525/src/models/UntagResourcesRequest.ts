// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags under the template. Valid values:
   * 
   * - **true**: yes.
   * - **false**: no.
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The product name. Default value: **dysms**.
   * 
   * @example
   * dysms
   */
  prodCode?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou by default.
   * For more region IDs, see [Service endpoints](https://help.aliyun.com/document_detail/419270.html).
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The SMS template code. The number of codes cannot exceed 20.
   * 
   * @example
   * SMS_23423423
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The resource type. Set the value to TEMPLATE by default.
   * 
   * This parameter is required.
   * 
   * @example
   * TEMPLATE
   */
  resourceType?: string;
  /**
   * @remarks
   * The tag key. You can add no more than 20 tags at a time.
   * 
   * @example
   * TestKey
   */
  tagKey?: string[];
  static names(): { [key: string]: string } {
    return {
      all: 'All',
      ownerId: 'OwnerId',
      prodCode: 'ProdCode',
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      resourceType: 'ResourceType',
      tagKey: 'TagKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      all: 'boolean',
      ownerId: 'number',
      prodCode: 'string',
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      resourceType: 'string',
      tagKey: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tagKey)) {
      $dara.Model.validateArray(this.tagKey);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

