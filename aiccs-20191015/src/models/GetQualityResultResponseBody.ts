// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityResultResponseBodyDataQualityResultResponseList extends $dara.Model {
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **1**: Hotline.
   * - **2**: Online.
   * 
   * @example
   * 2
   */
  channelType?: string;
  /**
   * @remarks
   * The name of the channel type.
   * 
   * @example
   * Online
   */
  channelTypeName?: string;
  /**
   * @remarks
   * The ID of the skill group.
   * 
   * @example
   * 123456
   */
  groupId?: string;
  /**
   * @remarks
   * The name of the skill group.
   * 
   * @example
   * Automated skill group
   */
  groupName?: string;
  /**
   * @remarks
   * The details of the quality inspection result, including the hit keywords and context chat information.
   * 
   * @example
   * null
   */
  hitDetail?: string;
  /**
   * @remarks
   * Indicates whether the rule is hit.
   * 
   * @example
   * 1
   */
  hitStatus?: boolean;
  /**
   * @remarks
   * The name of the instance.
   * 
   * @example
   * xspace commercial service
   */
  instanceName?: string;
  /**
   * @remarks
   * The name of the member.
   * 
   * @example
   * Anonymous member
   */
  memberName?: string;
  /**
   * @remarks
   * The ID of the quality inspection task.
   * 
   * @example
   * 15977801
   */
  projectId?: string;
  /**
   * @remarks
   * The name of the quality inspection task.
   * 
   * @example
   * Automated quality inspection task
   */
  projectName?: string;
  /**
   * @remarks
   * The ID of the quality inspection rule.
   * 
   * @example
   * 5369
   */
  ruleId?: string;
  /**
   * @remarks
   * The name of the quality inspection rule.
   * 
   * @example
   * Automated quality inspection rule
   */
  ruleName?: string;
  /**
   * @remarks
   * The ID of the customer service representative.
   * 
   * @example
   * 555555
   */
  servicerId?: string;
  /**
   * @remarks
   * The name of the customer service representative.
   * 
   * @example
   * Liu Test
   */
  servicerName?: string;
  /**
   * @remarks
   * The session ID.
   * 
   * @example
   * 20928756
   */
  touchId?: string;
  /**
   * @remarks
   * The start time of the session.
   * 
   * @example
   * 2020-11-26 12:11:06
   */
  touchStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      channelTypeName: 'ChannelTypeName',
      groupId: 'GroupId',
      groupName: 'GroupName',
      hitDetail: 'HitDetail',
      hitStatus: 'HitStatus',
      instanceName: 'InstanceName',
      memberName: 'MemberName',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      ruleId: 'RuleId',
      ruleName: 'RuleName',
      servicerId: 'ServicerId',
      servicerName: 'ServicerName',
      touchId: 'TouchId',
      touchStartTime: 'TouchStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      channelTypeName: 'string',
      groupId: 'string',
      groupName: 'string',
      hitDetail: 'string',
      hitStatus: 'boolean',
      instanceName: 'string',
      memberName: 'string',
      projectId: 'string',
      projectName: 'string',
      ruleId: 'string',
      ruleName: 'string',
      servicerId: 'string',
      servicerName: 'string',
      touchId: 'string',
      touchStartTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of data details.
   */
  qualityResultResponseList?: GetQualityResultResponseBodyDataQualityResultResponseList[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 84
   */
  totalNum?: number;
  static names(): { [key: string]: string } {
    return {
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      qualityResultResponseList: 'QualityResultResponseList',
      totalNum: 'TotalNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNo: 'number',
      pageSize: 'number',
      qualityResultResponseList: { 'type': 'array', 'itemType': GetQualityResultResponseBodyDataQualityResultResponseList },
      totalNum: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.qualityResultResponseList)) {
      $dara.Model.validateArray(this.qualityResultResponseList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityResultResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the channel type.
   * 
   * @example
   * Online
   */
  channelTypeName?: string;
  /**
   * @remarks
   * The status code. A value of 200 indicates that the request is successful.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The quality inspection task data.
   */
  data?: GetQualityResultResponseBodyData;
  /**
   * @remarks
   * The description of the status code.
   * 
   * @example
   * xxxx
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EE338D98-9BD3-4413-B165
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the API call is successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      channelTypeName: 'ChannelTypeName',
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelTypeName: 'string',
      code: 'string',
      data: GetQualityResultResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

