// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLaunchTemplateVersionsRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to query the default version.
   * 
   * @example
   * true
   */
  defaultVersion?: boolean;
  /**
   * @remarks
   * Specifies whether to query the configurations of the launch template. Valid values:
   * 
   * *   true: queries the basic information and other details of the launch template. The details include the image ID and system disk size.
   * *   false: queries only the basic information of the launch template. The basic information includes the template ID, template name, and default version.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  detailFlag?: boolean;
  /**
   * @remarks
   * The ID of the launch template.
   * 
   * You must set `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.
   * 
   * @example
   * lt-bp168lnahrdwl39p****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the launch template.
   * 
   * You must set `LaunchTemplateId` or `LaunchTemplateName` to specify a launch template.
   * 
   * @example
   * testLaunchTemplateName
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The versions of the launch template.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: number[];
  /**
   * @remarks
   * The maximum version number in the version range to query. This parameter is used together with `MinVersion` to specify a version range to query.
   * 
   * @example
   * 10
   */
  maxVersion?: number;
  /**
   * @remarks
   * The minimum version number in the version range to query. This parameter is used together with `MaxVersion` to specify a version range to query.
   * 
   * @example
   * 1
   */
  minVersion?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * Pages start from page 1.
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries to return on each page.
   * 
   * Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The region ID of the launch template.
   * 
   * You can call the [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) operation to query the most recent region list.
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
      defaultVersion: 'DefaultVersion',
      detailFlag: 'DetailFlag',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      launchTemplateVersion: 'LaunchTemplateVersion',
      maxVersion: 'MaxVersion',
      minVersion: 'MinVersion',
      ownerAccount: 'OwnerAccount',
      ownerId: 'OwnerId',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      regionId: 'RegionId',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultVersion: 'boolean',
      detailFlag: 'boolean',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      launchTemplateVersion: { 'type': 'array', 'itemType': 'number' },
      maxVersion: 'number',
      minVersion: 'number',
      ownerAccount: 'string',
      ownerId: 'number',
      pageNumber: 'number',
      pageSize: 'number',
      regionId: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateVersion)) {
      $dara.Model.validateArray(this.launchTemplateVersion);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

