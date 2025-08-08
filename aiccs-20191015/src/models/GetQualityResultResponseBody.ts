// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityResultResponseBodyDataQualityResultResponseList extends $dara.Model {
  channelType?: string;
  channelTypeName?: string;
  groupId?: string;
  groupName?: string;
  hitDetail?: string;
  hitStatus?: boolean;
  instanceName?: string;
  memberName?: string;
  projectId?: string;
  projectName?: string;
  ruleId?: string;
  ruleName?: string;
  servicerId?: string;
  servicerName?: string;
  touchId?: string;
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
  pageNo?: number;
  pageSize?: number;
  qualityResultResponseList?: GetQualityResultResponseBodyDataQualityResultResponseList[];
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
  channelTypeName?: string;
  code?: string;
  data?: GetQualityResultResponseBodyData;
  message?: string;
  requestId?: string;
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

