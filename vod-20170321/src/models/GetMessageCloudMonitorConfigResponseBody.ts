// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMessageCloudMonitorConfigResponseBodyMessageCloudMonitorConfig extends $dara.Model {
  appId?: string;
  eventTypeList?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      eventTypeList: 'EventTypeList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      eventTypeList: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMessageCloudMonitorConfigResponseBody extends $dara.Model {
  messageCloudMonitorConfig?: GetMessageCloudMonitorConfigResponseBodyMessageCloudMonitorConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messageCloudMonitorConfig: 'MessageCloudMonitorConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messageCloudMonitorConfig: GetMessageCloudMonitorConfigResponseBodyMessageCloudMonitorConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.messageCloudMonitorConfig && typeof (this.messageCloudMonitorConfig as any).validate === 'function') {
      (this.messageCloudMonitorConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

