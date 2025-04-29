// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportImageRequest extends $dara.Model {
  dryRun?: boolean;
  /**
   * @remarks
   * The format in which you want to export the custom image. Valid values:
   * 
   * *   raw
   * *   vhd
   * *   qcow2
   * *   vmdk
   * *   vdi
   * 
   * Default value: raw.
   * 
   * @example
   * raw
   */
  imageFormat?: string;
  /**
   * @remarks
   * The custom image ID.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  imageId?: string;
  /**
   * @remarks
   * The OSS bucket in which you want to store the exported custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * testexportImage
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The prefix for the name of the OSS object. The prefix must be 1 to 30 characters in length and can contain digits and letters.
   * 
   * @example
   * EcsExport
   */
  OSSPrefix?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the custom image. You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  /**
   * @remarks
   * The name of the RAM role that you want to use to export the custom image.
   * 
   * @example
   * AliyunECSImageExportDefaultRole
   */
  roleName?: string;
  static names(): { [key: string]: string } {
    return {
      dryRun: 'DryRun',
      imageFormat: 'ImageFormat',
      imageId: 'ImageId',
      OSSBucket: 'OSSBucket',
      OSSPrefix: 'OSSPrefix',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      roleName: 'RoleName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRun: 'boolean',
      imageFormat: 'string',
      imageId: 'string',
      OSSBucket: 'string',
      OSSPrefix: 'string',
      ownerId: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      roleName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

