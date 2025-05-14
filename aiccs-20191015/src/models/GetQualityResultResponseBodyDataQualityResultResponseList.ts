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

