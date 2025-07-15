// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTagsTagInfo extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * PROJECT
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 6427a17ae6041d1be62414e4
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
  /**
   * @remarks
   * The time when the authorization was created.
   * 
   * @example
   * 2017-01-30T04:10:19Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the VPC access authorization.
   * 
   * @example
   * Test
   */
  description?: string;
  /**
   * @remarks
   * The ID of an Elastic Compute Service (ECS) or Server Load Balancer (SLB) instance in the VPC.
   * 
   * @example
   * i-uf6bzcg1pr4oh5jjmxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the authorization.
   * 
   * @example
   * test
   */
  name?: string;
  /**
   * @remarks
   * The port number that corresponds to the instance.
   * 
   * @example
   * 80
   */
  port?: number;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags.
   */
  tags?: DescribeVpcAccessesResponseBodyVpcAccessAttributesVpcAccessAttributeTags;
  /**
   * @remarks
   * The ID of the VPC access authorization.
   * 
   * @example
   * vpc-*****ssds24
   */
  vpcAccessId?: string;
  /**
   * @remarks
   * The VPC ID.
   * 
   * @example
   * vpc-uf657qec7lx42paw3qxxx
   */
  vpcId?: string;
  /**
   * @remarks
   * The host of the backend service.
   * 
   * @example
   * hos-a***.fh-**nc.com
   */
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
  /**
   * @remarks
   * The information about the VPC access authorization. The information is an array consisting of VpcAccessAttribute data.
   */
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

