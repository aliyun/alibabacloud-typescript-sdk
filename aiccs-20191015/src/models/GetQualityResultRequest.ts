// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityResultRequest extends $dara.Model {
  /**
   * @remarks
   * The channel type. Valid values:
   * 
   * - **online**: Online.
   * - **hotline**: Hotline.
   * 
   * @example
   * online
   */
  channelType?: string;
  /**
   * @remarks
   * The IDs of the skill groups.
   */
  groupIds?: number[];
  /**
   * @remarks
   * The hit status. Valid values:
   * 
   * - **0**: Not hit.
   * - **1**: Hit.
   * 
   * @example
   * 1
   */
  hitStatus?: number;
  /**
   * @remarks
   * Instance ID of the AICCS instance. You can obtain instance ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The current page number. Default value: **1**.
   * 
   * @example
   * 1
   */
  pageNo?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The IDs of the quality inspection tasks.
   */
  projectIds?: number[];
  /**
   * @remarks
   * The IDs of the quality inspection rules.
   */
  qualityRuleIds?: number[];
  /**
   * @remarks
   * The end time of the session.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-04-18 16:04:20
   */
  touchEndTime?: string;
  /**
   * @remarks
   * The start time of the session.
   * 
   * This parameter is required.
   * 
   * @example
   * 2020-11-18 16:02:20
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

