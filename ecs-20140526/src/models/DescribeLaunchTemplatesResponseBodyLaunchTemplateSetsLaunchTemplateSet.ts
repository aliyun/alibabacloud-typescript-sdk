// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSetTags } from "./DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSetTags";


export class DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSet extends $dara.Model {
  /**
   * @remarks
   * The time when the launch template was created.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-14T14:18:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that created the launch template.
   * 
   * @example
   * 1234567890
   */
  createdBy?: string;
  /**
   * @remarks
   * The time when the launch template was modified.
   * 
   * @example
   * 1
   */
  defaultVersionNumber?: number;
  /**
   * @remarks
   * The tags of the launch template.
   * 
   * @example
   * 1
   */
  latestVersionNumber?: number;
  /**
   * @remarks
   * The time when the launch template was created.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7q****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The default version number of the launch template.
   * 
   * @example
   * wd-152630748****
   */
  launchTemplateName?: string;
  /**
   * @remarks
   * The time when a version was added to or deleted from the launch template.
   * 
   * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2018-05-14T14:18:00Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The creator of the launch template.
   * 
   * @example
   * rg-acfmxazb4p****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The tags of the launch template.
   * 
   * >  You can only call API operations to add tags to and query the tags of a launch template. You cannot add tags to or view the tags of a launch template in the ECS console.
   */
  tags?: DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSetTags;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      createdBy: 'CreatedBy',
      defaultVersionNumber: 'DefaultVersionNumber',
      latestVersionNumber: 'LatestVersionNumber',
      launchTemplateId: 'LaunchTemplateId',
      launchTemplateName: 'LaunchTemplateName',
      modifiedTime: 'ModifiedTime',
      resourceGroupId: 'ResourceGroupId',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      createdBy: 'string',
      defaultVersionNumber: 'number',
      latestVersionNumber: 'number',
      launchTemplateId: 'string',
      launchTemplateName: 'string',
      modifiedTime: 'string',
      resourceGroupId: 'string',
      tags: DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSetTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

