// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRealtimeCampaignStatsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 111
   */
  queueId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      queueId: 'QueueId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      queueId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

