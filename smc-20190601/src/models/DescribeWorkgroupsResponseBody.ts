// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTagsTag extends $dara.Model {
  /**
   * @remarks
   * The tag key of the workgroup.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value of the workgroup.
   * 
   * @example
   * TestValue
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

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTags extends $dara.Model {
  tag?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTagsTag[];
  static names(): { [key: string]: string } {
    return {
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tag: { 'type': 'array', 'itemType': DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTagsTag },
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

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarningSourceIds extends $dara.Model {
  sourceId?: string[];
  static names(): { [key: string]: string } {
    return {
      sourceId: 'SourceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceId: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.sourceId)) {
      $dara.Model.validateArray(this.sourceId);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarning extends $dara.Model {
  /**
   * @remarks
   * The migration sources for which alerts are generated.
   */
  sourceIds?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarningSourceIds;
  /**
   * @remarks
   * The type of the alert. Valid values:
   * 
   * *   InError: A migration job failed.
   * *   UnRelated: No migration job is created for a migration source.
   * *   NotPassed: A migration job failed to pass the migration test.
   * 
   * @example
   * InError
   */
  warningType?: string;
  static names(): { [key: string]: string } {
    return {
      sourceIds: 'SourceIds',
      warningType: 'WarningType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sourceIds: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarningSourceIds,
      warningType: 'string',
    };
  }

  validate() {
    if(this.sourceIds && typeof (this.sourceIds as any).validate === 'function') {
      (this.sourceIds as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarnings extends $dara.Model {
  warning?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarning[];
  static names(): { [key: string]: string } {
    return {
      warning: 'Warning',
    };
  }

  static types(): { [key: string]: any } {
    return {
      warning: { 'type': 'array', 'itemType': DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarningsWarning },
    };
  }

  validate() {
    if(Array.isArray(this.warning)) {
      $dara.Model.validateArray(this.warning);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBodyWorkgroupsWorkgroup extends $dara.Model {
  /**
   * @remarks
   * The description of the workgroup.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The name of the workgroup.
   * 
   * @example
   * testWorkgroupName
   */
  name?: string;
  /**
   * @remarks
   * The state of the workgroup. Valid values:
   * 
   * *   NotStarted
   * *   InProgress
   * *   Cutover
   * *   Completed
   * 
   * @example
   * InProgress
   */
  status?: string;
  /**
   * @remarks
   * The tag information of the workgroup.
   */
  tags?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTags;
  /**
   * @remarks
   * The alert information of the workgroup, which can contain multiple types of alerts.
   */
  warnings?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarnings;
  /**
   * @remarks
   * The ID of the workgroup.
   * 
   * @example
   * w-***
   */
  workgroupId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      status: 'Status',
      tags: 'Tags',
      warnings: 'Warnings',
      workgroupId: 'WorkgroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      status: 'string',
      tags: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupTags,
      warnings: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroupWarnings,
      workgroupId: 'string',
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    if(this.warnings && typeof (this.warnings as any).validate === 'function') {
      (this.warnings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBodyWorkgroups extends $dara.Model {
  workgroup?: DescribeWorkgroupsResponseBodyWorkgroupsWorkgroup[];
  static names(): { [key: string]: string } {
    return {
      workgroup: 'Workgroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      workgroup: { 'type': 'array', 'itemType': DescribeWorkgroupsResponseBodyWorkgroupsWorkgroup },
    };
  }

  validate() {
    if(Array.isArray(this.workgroup)) {
      $dara.Model.validateArray(this.workgroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeWorkgroupsResponseBody extends $dara.Model {
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
   * The number of entries per page. Valid values: 1 to 50. Default value: 10.
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
   * 2D69A58F-345C-4FDE-88E4-BF518948****
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of workgroups.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  /**
   * @remarks
   * The details of the workgroup.
   */
  workgroups?: DescribeWorkgroupsResponseBodyWorkgroups;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      workgroups: 'Workgroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      workgroups: DescribeWorkgroupsResponseBodyWorkgroups,
    };
  }

  validate() {
    if(this.workgroups && typeof (this.workgroups as any).validate === 'function') {
      (this.workgroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

