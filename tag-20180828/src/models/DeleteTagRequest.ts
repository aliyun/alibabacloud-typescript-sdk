// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTagRequest extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * If no tag value is associated with a tag key, you can specify the `Key` parameter without specifying the Value parameter to delete the tag key. Otherwise, you must specify both the `Key` and `Value` parameters to delete a preset tag.
   * 
   * This parameter is required.
   * 
   * @example
   * Environment
   */
  key?: string;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * >  Only `cn-hangzhou` is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      ownerAccount: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

