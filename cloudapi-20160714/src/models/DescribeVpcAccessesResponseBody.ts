// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTagsTagInfo extends $dara.Model {
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

export class DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTags extends $dara.Model {
  tagInfo?: DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTagsTagInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute extends $dara.Model {
  createdTime?: string;
  description?: string;
  instanceId?: string;
  name?: string;
  port?: number;
  regionId?: string;
  tags?: DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTags;
  vpcAccessId?: string;
  vpcId?: string;
  vpcTargetHostName?: string;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      instanceId: 'InstanceId',
      name: 'Name',
      port: 'Port',
      regionId: 'RegionId',
      tags: 'Tags',
      vpcAccessId: 'VpcAccessId',
      vpcId: 'VpcId',
      vpcTargetHostName: 'VpcTargetHostName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      instanceId: 'string',
      name: 'string',
      port: 'number',
      regionId: 'string',
      tags: DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTags,
      vpcAccessId: 'string',
      vpcId: 'string',
      vpcTargetHostName: 'string',
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

export class DescribeVpcAccessesResponseBodyVpcAccessAttributes extends $dara.Model {
  vpcAccessAttribute?: DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute[];
  static names(): { [key: string]: string } {
    return {
      vpcAccessAttribute: 'VpcAccessAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      vpcAccessAttribute: { 'type': 'array', 'itemType': DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.vpcAccessAttribute)) {
      $dara.Model.validateArray(this.vpcAccessAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeVpcAccessesResponseBody extends $dara.Model {
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
   * The number of entries returned on each page.
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
   * 8883AC74-259D-4C0B-99FC-0B7F9A588B2F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  vpcAccessAttributes?: DescribeVpcAccessesResponseBodyVpcAccessAttributes;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
      vpcAccessAttributes: 'VpcAccessAttributes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
      vpcAccessAttributes: DescribeVpcAccessesResponseBodyVpcAccessAttributes,
    };
  }

  validate() {
    if(this.vpcAccessAttributes && typeof (this.vpcAccessAttributes as any).validate === 'function') {
      (this.vpcAccessAttributes as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

