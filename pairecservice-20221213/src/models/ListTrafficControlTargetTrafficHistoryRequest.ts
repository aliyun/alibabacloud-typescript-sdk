// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTrafficControlTargetTrafficHistoryRequest extends $dara.Model {
  endTime?: string;
  environment?: string;
  experimentGroupId?: string;
  experimentId?: string;
  instanceId?: string;
  itemId?: string;
  startTime?: string;
  threshold?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      environment: 'Environment',
      experimentGroupId: 'ExperimentGroupId',
      experimentId: 'ExperimentId',
      instanceId: 'InstanceId',
      itemId: 'ItemId',
      startTime: 'StartTime',
      threshold: 'Threshold',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      environment: 'string',
      experimentGroupId: 'string',
      experimentId: 'string',
      instanceId: 'string',
      itemId: 'string',
      startTime: 'string',
      threshold: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

