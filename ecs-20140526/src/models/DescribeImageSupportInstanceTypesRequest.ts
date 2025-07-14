// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeImageSupportInstanceTypesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * Filter N used to filter instance types.
   * 
   * @example
   * imageId
   */
  key?: string;
  /**
   * @remarks
   * The ID of the image.
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
   * *   CreateEcs (default): instance creation
   * *   ChangeOS: replacement of the system disk or operating system
   * 
   * @example
   * CreateEcs
   */
  actionType?: string;
  /**
   * @remarks
   * The number of vCPUs of the instance type.
   */
  filter?: DescribeImageSupportInstanceTypesRequestFilter[];
  /**
   * @remarks
   * The region ID of the image. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * @example
   * m-o6w3gy99qf89rkga****
   */
  imageId?: string;
  ownerId?: number;
  /**
   * @remarks
   * Details about the instance types that are supported by the image.
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

