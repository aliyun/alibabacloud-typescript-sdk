// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLaunchTemplatesResponseBodyLaunchTemplateSetsLaunchTemplateSetTagsTag extends $dara.Model {
  tagKey?: string;
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
  createTime?: string;
  createdBy?: string;
  defaultVersionNumber?: number;
  latestVersionNumber?: number;
  launchTemplateId?: string;
  launchTemplateName?: string;
  modifiedTime?: string;
  resourceGroupId?: string;
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
  launchTemplateSets?: DescribeLaunchTemplatesResponseBodyLaunchTemplateSets;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
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

