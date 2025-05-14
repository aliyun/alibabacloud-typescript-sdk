// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityResultRequest extends $dara.Model {
  channelType?: string;
  groupIds?: number[];
  hitStatus?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  pageNo?: number;
  pageSize?: number;
  projectIds?: number[];
  qualityRuleIds?: number[];
  /**
   * @remarks
   * This parameter is required.
   */
  touchEndTime?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  touchStartTime?: string;
  static names(): { [key: string]: string } {
    return {
      channelType: 'ChannelType',
      groupIds: 'GroupIds',
      hitStatus: 'HitStatus',
      instanceId: 'InstanceId',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
      projectIds: 'ProjectIds',
      qualityRuleIds: 'QualityRuleIds',
      touchEndTime: 'TouchEndTime',
      touchStartTime: 'TouchStartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channelType: 'string',
      groupIds: { 'type': 'array', 'itemType': 'number' },
      hitStatus: 'number',
      instanceId: 'string',
      pageNo: 'number',
      pageSize: 'number',
      projectIds: { 'type': 'array', 'itemType': 'number' },
      qualityRuleIds: { 'type': 'array', 'itemType': 'number' },
      touchEndTime: 'string',
      touchStartTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.groupIds)) {
      $dara.Model.validateArray(this.groupIds);
    }
    if(Array.isArray(this.projectIds)) {
      $dara.Model.validateArray(this.projectIds);
    }
    if(Array.isArray(this.qualityRuleIds)) {
      $dara.Model.validateArray(this.qualityRuleIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

