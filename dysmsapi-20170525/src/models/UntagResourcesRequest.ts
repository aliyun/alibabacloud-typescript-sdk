// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UntagResourcesRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to delete all tags from the message template. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  all?: boolean;
  ownerId?: number;
  /**
   * @remarks
   * The name of the cloud service. Set the value to **dysms**.
   * 
   * @example
   * dysms
   */
  prodCode?: string;
  /**
   * @remarks
   * The region. Set the value to cn-hangzhou.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The array of message template codes. You can specify 1 to 20 message templates.
   * 
   * @example
   * SMS_23423423
   */
  resourceId?: string[];
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The type of the resource. Set the value to TEMPLATE.
   * 
   * This parameter is required.
   * 
   * @example
   * TEMPLATE
   */
  resourceType?: string;
  /**
   * @remarks
   * The array of tag keys. You can specify 1 to 20 tag keys.
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

