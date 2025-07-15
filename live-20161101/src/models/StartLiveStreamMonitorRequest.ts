// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartLiveStreamMonitorRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the monitoring session.
   * 
   * >  You can obtain the monitoring session ID from the response of the [CreateLiveStreamMonitor](https://help.aliyun.com/document_detail/2848129.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 445409ec-7eaa-461d-8f29-4bec2eb9****
   */
  monitorId?: string;
  ownerId?: number;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      monitorId: 'MonitorId',
      ownerId: 'OwnerId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      monitorId: 'string',
      ownerId: 'number',
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

