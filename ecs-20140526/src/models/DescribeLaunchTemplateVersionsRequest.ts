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
   * Specifies whether to query detailed template configuration information. Valid values:
   * 
   * - true: Queries detailed template configuration information. In addition to basic template information, detailed configuration such as image ID and system disk size is returned.
   * 
   * - false: Queries only basic template information, such as template ID, template name, and default version.
   * 
   * Default value: true.
   * 
   * @example
   * true
   */
  detailFlag?: boolean;
  /**
   * @remarks
   * The launch template ID.
   * 
   * You must specify `LaunchTemplateId` or `LaunchTemplateName` to determine the template.
   * 
   * @example
   * lt-bp168lnahrdwl39p****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The launch template name.
   * 
   * You must specify `LaunchTemplateId` or `LaunchTemplateName` to determine the template.
   * 
   * @example
   * testLaunchTemplateName
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * One or more launch template version numbers.
   * 
   * @example
   * 1
   */
  launchTemplateVersion?: number[];
  /**
   * @remarks
   * The maximum version number used to filter query results. Used together with `MinVersion` to query version information within the range between the minimum and maximum version numbers.
   * 
   * @example
   * 10
   */
  maxVersion?: number;
  /**
   * @remarks
   * The minimum version number used to filter query results. Used together with `MaxVersion` to query version information within the range between the minimum and maximum version numbers.
   * 
   * @example
   * 1
   */
  minVersion?: number;
  ownerAccount?: string;
  ownerId?: number;
  /**
   * @remarks
   * The page number of the launch template list.
   * 
   * Minimum value: 1. 
   * 
   * Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query. Settings this parameter for paging. 
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
   * You can call [DescribeRegions](https://help.aliyun.com/document_detail/25609.html) to query the most recent region list.
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

