// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifySystemEventAttributeRequest extends $dara.Model {
  /**
   * @remarks
   * The event ID.
   * 
   * This parameter is required.
   * 
   * @example
   * e-2zeielxl1qzq8slb****
   */
  eventId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * i-bp67acfmxazb4p****
   */
  instanceId?: string;
  /**
   * @remarks
   * The new planned execution time of the system event. Specify the time in the [ISO 8601](https://www.alibabacloud.com/help/en/ecs/developer-reference/iso-8601-time-format) standard in the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-06-30T00:00:00Z
   */
  notBefore?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      eventId: 'EventId',
      instanceId: 'InstanceId',
      notBefore: 'NotBefore',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventId: 'string',
      instanceId: 'string',
      notBefore: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

