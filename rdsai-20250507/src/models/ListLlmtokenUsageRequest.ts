// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLLMTokenUsageRequest extends $dara.Model {
  /**
   * @remarks
   * The end time of the inspection in UTC. Specify the time in the ISO 8601 standard. Format: YYYY-MM-DDTHH:mm:ssZ. The end time must be at least 2 hours later than the start time.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-02-03T02:10:00Z
   */
  endTime?: string;
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * This parameter is required.
   * 
   * @example
   * ra-supabase-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The model to query.
   * 
   * @example
   * qwen-flash
   */
  model?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The start time of the inspection in UTC. Specify the time in the ISO 8601 standard. Format: YYYY-MM-DDTHH:mm:ssZ.
   * 
   * This parameter is required.
   * 
   * @example
   * 2026-03-31T16:00:00Z
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      endTime: 'EndTime',
      instanceName: 'InstanceName',
      model: 'Model',
      regionId: 'RegionId',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endTime: 'string',
      instanceName: 'string',
      model: 'string',
      regionId: 'string',
      startTime: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

