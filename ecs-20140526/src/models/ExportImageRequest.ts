// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportImageRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to perform a dry run to check the request\\"s validity without actually exporting the image. Valid values:
   * 
   * - `true`: Performs a dry run. If the check succeeds, the `DryRunOperation` error code is returned. If the check fails, an error is returned.
   * - `false`: Sends a normal request. If the check succeeds, the image is exported.
   * 
   * Default value: false.
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The format of the exported image file. Valid values:
   * 
   * - raw.
   * 
   * - vhd.
   * 
   * - qcow2.
   * 
   * - vmdk.
   * 
   * - vdi.
   * 
   * Default value: raw.
   * 
   * @example
   * raw
   */
  imageFormat?: string;
  /**
   * @remarks
   * The ID of the custom image.
   * 
   * This parameter is required.
   * 
   * @example
   * m-bp67acfmxazb4p****
   */
  imageId?: string;
  /**
   * @remarks
   * The destination OSS bucket for the exported image.
   * 
   * This parameter is required.
   * 
   * @example
   * testexportImage
   */
  OSSBucket?: string;
  /**
   * @remarks
   * The prefix for the OSS object. The prefix must be 1 to 30 characters in length and can consist of letters and digits.
   * 
   * @example
   * EcsExport
   */
  OSSPrefix?: string;
  ownerId?: number;
  /**
   * @remarks
   * The region ID of the custom image. You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to view the latest list of Alibaba Cloud regions.
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
   * The name of the RAM role used to export the image.
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

