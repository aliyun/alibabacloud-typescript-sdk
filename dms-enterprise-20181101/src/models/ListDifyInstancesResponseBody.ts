// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDifyInstancesResponseBodyRootData extends $dara.Model {
  /**
   * @example
   * abc
   */
  appUuid?: string;
  /**
   * @example
   * 2025-04-20T00:14:38Z
   */
  createdTime?: string;
  /**
   * @example
   * 实例描述
   */
  description?: string;
  /**
   * @example
   * abc
   */
  difyInstanceId?: string;
  /**
   * @example
   * this is a dify instance
   */
  difyInstanceName?: string;
  /**
   * @example
   * Community
   */
  edition?: string;
  /**
   * @example
   * 0.0.0.0
   */
  enterpriseInternetUrl?: string;
  /**
   * @example
   * 127.0.0.1
   */
  enterpriseIntranetUrl?: string;
  /**
   * @example
   * 2818729
   */
  instanceId?: string;
  /**
   * @example
   * public_lts_zb_10
   */
  instanceName?: string;
  /**
   * @example
   * 0.0.0.0
   */
  internetUrl?: string;
  /**
   * @example
   * 127.0.0.1
   */
  intranetUrl?: string;
  /**
   * @example
   * 1.4.x
   */
  majorVersion?: string;
  /**
   * @example
   * 地域信息
   */
  regionCode?: string;
  /**
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @example
   * sg-2ze2aigcxhjohtldnyml
   */
  securityGroupId?: string;
  /**
   * @example
   * running
   */
  status?: string;
  /**
   * @example
   * vsw-bp1ig49b0bbbx33aiqbgu
   */
  vSwitchId?: string;
  /**
   * @example
   * vpc-2ze5ar1uh249xpqrfgfbj
   */
  vpcId?: string;
  /**
   * @example
   * 8609287469406252
   */
  workspaceId?: string;
  /**
   * @example
   * cn-beijing-f
   */
  zoneId?: string;
  static names(): { [key: string]: string } {
    return {
      appUuid: 'AppUuid',
      createdTime: 'CreatedTime',
      description: 'Description',
      difyInstanceId: 'DifyInstanceId',
      difyInstanceName: 'DifyInstanceName',
      edition: 'Edition',
      enterpriseInternetUrl: 'EnterpriseInternetUrl',
      enterpriseIntranetUrl: 'EnterpriseIntranetUrl',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetUrl: 'InternetUrl',
      intranetUrl: 'IntranetUrl',
      majorVersion: 'MajorVersion',
      regionCode: 'RegionCode',
      regionId: 'RegionId',
      securityGroupId: 'SecurityGroupId',
      status: 'Status',
      vSwitchId: 'VSwitchId',
      vpcId: 'VpcId',
      workspaceId: 'WorkspaceId',
      zoneId: 'ZoneId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appUuid: 'string',
      createdTime: 'string',
      description: 'string',
      difyInstanceId: 'string',
      difyInstanceName: 'string',
      edition: 'string',
      enterpriseInternetUrl: 'string',
      enterpriseIntranetUrl: 'string',
      instanceId: 'string',
      instanceName: 'string',
      internetUrl: 'string',
      intranetUrl: 'string',
      majorVersion: 'string',
      regionCode: 'string',
      regionId: 'string',
      securityGroupId: 'string',
      status: 'string',
      vSwitchId: 'string',
      vpcId: 'string',
      workspaceId: 'string',
      zoneId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDifyInstancesResponseBodyRoot extends $dara.Model {
  data?: ListDifyInstancesResponseBodyRootData[];
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListDifyInstancesResponseBodyRootData },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDifyInstancesResponseBodyTags extends $dara.Model {
  /**
   * @example
   * opt_measure_group
   */
  tagKey?: string;
  /**
   * @example
   * 15
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

export class ListDifyInstancesResponseBody extends $dara.Model {
  /**
   * @example
   * 200
   */
  code?: string;
  /**
   * @example
   * UnknownError
   */
  errorCode?: string;
  /**
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * UnknownError
   */
  message?: string;
  /**
   * @example
   * NesLoKLEdIZrKhDT7I2gS****
   */
  nextToken?: string;
  /**
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  root?: ListDifyInstancesResponseBodyRoot;
  /**
   * @example
   * true
   */
  success?: boolean;
  tags?: ListDifyInstancesResponseBodyTags[];
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      errorCode: 'ErrorCode',
      httpStatusCode: 'HttpStatusCode',
      maxResults: 'MaxResults',
      message: 'Message',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      root: 'Root',
      success: 'Success',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      errorCode: 'string',
      httpStatusCode: 'number',
      maxResults: 'number',
      message: 'string',
      nextToken: 'string',
      requestId: 'string',
      root: ListDifyInstancesResponseBodyRoot,
      success: 'boolean',
      tags: { 'type': 'array', 'itemType': ListDifyInstancesResponseBodyTags },
    };
  }

  validate() {
    if(this.root && typeof (this.root as any).validate === 'function') {
      (this.root as any).validate();
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

