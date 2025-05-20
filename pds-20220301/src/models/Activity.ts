// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Activity extends $dara.Model {
  activityId?: string;
  device?: string;
  driveId?: string;
  eventType?: number;
  latestEventTime?: string;
  resourceCategory?: number;
  resourceList?: { [key: string]: any }[];
  totalResourceCount?: number;
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'activity_id',
      device: 'device',
      driveId: 'drive_id',
      eventType: 'event_type',
      latestEventTime: 'latest_event_time',
      resourceCategory: 'resource_category',
      resourceList: 'resource_list',
      totalResourceCount: 'total_resource_count',
      userId: 'user_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'string',
      device: 'string',
      driveId: 'string',
      eventType: 'number',
      latestEventTime: 'string',
      resourceCategory: 'number',
      resourceList: { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } },
      totalResourceCount: 'number',
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

