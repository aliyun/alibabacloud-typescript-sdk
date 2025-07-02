// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ScalingActivity extends $dara.Model {
  cause?: string;
  description?: string;
  endTime?: number;
  essScalingRuleId?: string;
  expectNum?: number;
  hostGroupName?: string;
  id?: string;
  instanceIds?: string;
  scalingGroupId?: string;
  scalingRuleName?: string;
  startTime?: number;
  status?: string;
  totalCapacity?: number;
  transition?: string;
  static names(): { [key: string]: string } {
    return {
      cause: 'Cause',
      description: 'Description',
      endTime: 'EndTime',
      essScalingRuleId: 'EssScalingRuleId',
      expectNum: 'ExpectNum',
      hostGroupName: 'HostGroupName',
      id: 'Id',
      instanceIds: 'InstanceIds',
      scalingGroupId: 'ScalingGroupId',
      scalingRuleName: 'ScalingRuleName',
      startTime: 'StartTime',
      status: 'Status',
      totalCapacity: 'TotalCapacity',
      transition: 'Transition',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cause: 'string',
      description: 'string',
      endTime: 'number',
      essScalingRuleId: 'string',
      expectNum: 'number',
      hostGroupName: 'string',
      id: 'string',
      instanceIds: 'string',
      scalingGroupId: 'string',
      scalingRuleName: 'string',
      startTime: 'number',
      status: 'string',
      totalCapacity: 'number',
      transition: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

