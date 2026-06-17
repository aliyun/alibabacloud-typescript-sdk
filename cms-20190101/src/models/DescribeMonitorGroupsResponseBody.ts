// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeMonitorGroupsResponseBodyResourcesResourceContactGroupsContactGroup extends $dara.Model {
  name?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups extends $dara.Model {
  contactGroup?: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroupsContactGroup[];
  static names(): { [key: string]: string } {
    return {
      contactGroup: 'ContactGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      contactGroup: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResourceContactGroupsContactGroup },
    };
  }

  validate() {
    if(Array.isArray(this.contactGroup)) {
      $dara.Model.validateArray(this.contactGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceTagsTag extends $dara.Model {
  key?: string;
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

export class DescribeMonitorGroupsResponseBodyResourcesResourceTags extends $dara.Model {
  tag?: DescribeMonitorGroupsResponseBodyResourcesResourceTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResourceTagsTag },
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

export class DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds extends $dara.Model {
  templateId?: string[];
  static names(): { [key: string]: string } {
    return {
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.templateId)) {
      $dara.Model.validateArray(this.templateId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceTemplateInfosTemplateInfo extends $dara.Model {
  effectTime?: number;
  templateId?: string;
  ver?: string;
  static names(): { [key: string]: string } {
    return {
      effectTime: 'EffectTime',
      templateId: 'TemplateId',
      ver: 'Ver',
    };
  }

  static types(): { [key: string]: any } {
    return {
      effectTime: 'number',
      templateId: 'string',
      ver: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResourceTemplateInfos extends $dara.Model {
  templateInfo?: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateInfosTemplateInfo[];
  static names(): { [key: string]: string } {
    return {
      templateInfo: 'TemplateInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateInfo: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResourceTemplateInfosTemplateInfo },
    };
  }

  validate() {
    if(Array.isArray(this.templateInfo)) {
      $dara.Model.validateArray(this.templateInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResourcesResource extends $dara.Model {
  bindUrl?: string;
  contactGroups?: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups;
  dynamicTagRuleId?: string;
  gmtCreate?: number;
  gmtModified?: number;
  groupFounderTagKey?: string;
  groupFounderTagValue?: string;
  groupId?: number;
  groupName?: string;
  resourceGroupId?: string;
  serviceId?: string;
  tags?: DescribeMonitorGroupsResponseBodyResourcesResourceTags;
  templateIds?: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds;
  templateInfos?: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateInfos;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      bindUrl: 'BindUrl',
      contactGroups: 'ContactGroups',
      dynamicTagRuleId: 'DynamicTagRuleId',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      groupFounderTagKey: 'GroupFounderTagKey',
      groupFounderTagValue: 'GroupFounderTagValue',
      groupId: 'GroupId',
      groupName: 'GroupName',
      resourceGroupId: 'ResourceGroupId',
      serviceId: 'ServiceId',
      tags: 'Tags',
      templateIds: 'TemplateIds',
      templateInfos: 'TemplateInfos',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bindUrl: 'string',
      contactGroups: DescribeMonitorGroupsResponseBodyResourcesResourceContactGroups,
      dynamicTagRuleId: 'string',
      gmtCreate: 'number',
      gmtModified: 'number',
      groupFounderTagKey: 'string',
      groupFounderTagValue: 'string',
      groupId: 'number',
      groupName: 'string',
      resourceGroupId: 'string',
      serviceId: 'string',
      tags: DescribeMonitorGroupsResponseBodyResourcesResourceTags,
      templateIds: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateIds,
      templateInfos: DescribeMonitorGroupsResponseBodyResourcesResourceTemplateInfos,
      type: 'string',
    };
  }

  validate() {
    if(this.contactGroups && typeof (this.contactGroups as any).validate === 'function') {
      (this.contactGroups as any).validate();
    }
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.templateIds && typeof (this.templateIds as any).validate === 'function') {
      (this.templateIds as any).validate();
    }
    if(this.templateInfos && typeof (this.templateInfos as any).validate === 'function') {
      (this.templateInfos as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBodyResources extends $dara.Model {
  resource?: DescribeMonitorGroupsResponseBodyResourcesResource[];
  static names(): { [key: string]: string } {
    return {
      resource: 'Resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resource: { 'type': 'array', 'itemType': DescribeMonitorGroupsResponseBodyResourcesResource },
    };
  }

  validate() {
    if(Array.isArray(this.resource)) {
      $dara.Model.validateArray(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeMonitorGroupsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code.
   * 
   * > A value of 200 indicates that the operation was successful.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The error message.
   * 
   * @example
   * The specified resource is not found.
   */
  message?: string;
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
   * The number of entries returned per page.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F02B299A-D374-4595-9F55-7534D604F132
   */
  requestId?: string;
  resources?: DescribeMonitorGroupsResponseBodyResources;
  /**
   * @remarks
   * Indicates whether the operation was successful. Valid values:
   * 
   * - true: The operation was successful.
   * 
   * - false: The operation failed.
   * 
   * @example
   * true
   */
  success?: boolean;
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 10
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      resources: 'Resources',
      success: 'Success',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      resources: DescribeMonitorGroupsResponseBodyResources,
      success: 'boolean',
      total: 'number',
    };
  }

  validate() {
    if(this.resources && typeof (this.resources as any).validate === 'function') {
      (this.resources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

