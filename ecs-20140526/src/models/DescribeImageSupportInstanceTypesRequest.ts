// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSupportInstanceTypesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The filter condition key. Currently, only filtering by image ID is supported. Valid values:
   * - imageId: filters by image ID.
   * - filter: filters by image ID.
   * 
   * > This parameter is not effective and will be deprecated soon.
   * 
   * @example
   * imageId
   */
  key?: string;
  /**
   * @remarks
   * The filter condition value.
   * > This parameter is not effective and will be deprecated soon.
   * 
   * @example
   * m-o6w3gy99qf89rkga****
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
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

export class DescribeImageSupportInstanceTypesRequest extends $dara.Model {
  /**
   * @remarks
   * The scenario in which the image is used. Valid values:
   * 
   * - CreateEcs (default): instance creation.
   * - ChangeOS: replacement of the system disk or operating system.
   * 
   * @example
   * CreateEcs
   */
  actionType?: string;
  /**
   * @remarks
   * The list of filter conditions for querying resources.
   */
  filter?: DescribeImageSupportInstanceTypesRequestFilter[];
  /**
   * @remarks
   * The image ID.
   * 
   * @example
   * m-o6w3gy99qf89rkga****
   */
  imageId?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  static names(): { [key: string]: string } {
    return {
      actionType: 'ActionType',
      filter: 'Filter',
      imageId: 'ImageId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actionType: 'string',
      filter: { 'type': 'array', 'itemType': DescribeImageSupportInstanceTypesRequestFilter },
      imageId: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

