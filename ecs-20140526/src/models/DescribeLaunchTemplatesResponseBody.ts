// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSetTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the launch template.
   * 
   * @example
   * TestKey
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value of the launch template.
   * 
   * @example
   * TestValue
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSetTags extends $dara.Model {
  tag?: DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSetTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSetTagsTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * The default version number of the launch template.
   * 
   * @example
   * 1
   */
  defaultVersionNumber?: number;
  /**
   * @remarks
   * The latest version number of the launch template.
   * 
   * @example
   * 1
   */
  latestVersionNumber?: number;
  /**
   * @remarks
   * The ID of the launch template.
   * 
   * @example
   * lt-m5e3ofjr1zn1aw7q****
   */
  launchTemplateId?: string;
  /**
   * @remarks
   * The name of the template.
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
   * The ID of the resource group to which the launch template belongs.
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

export class DescribeLaunchTemplatesResponseBodyLaunchTemplateSets extends $dara.Model {
  launchTemplateSet?: DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSet[];
  static names(): { [key: string]: string } {
    return {
      launchTemplateSet: 'LaunchTemplateSet',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateSet: { 'type': 'array', 'itemType': DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSet },
    };
  }

  validate() {
    if(Array.isArray(this.launchTemplateSet)) {
      $dara.Model.validateArray(this.launchTemplateSet);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeLaunchTemplatesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried launch templates.
   */
  launchTemplateSets?: DescribeLaunchTemplatesResponseBodyLaunchTemplateSets;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 04F0F334-1335-436C-A1D7-6C044FE12CBA
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of launch templates.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      launchTemplateSets: 'LaunchTemplateSets',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      launchTemplateSets: DescribeLaunchTemplatesResponseBodyLaunchTemplateSets,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.launchTemplateSets && typeof (this.launchTemplateSets as any).validate === 'function') {
      (this.launchTemplateSets as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

