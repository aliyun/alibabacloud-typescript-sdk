// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetStorageNotifyConfigResponseBodyOssNotifyConfig extends $dara.Model {
  eventList?: string;
  httpProcessAddress?: string;
  notifyName?: string;
  resourcePrefixName?: string;
  static names(): { [key: string]: string } {
    return {
      eventList: 'EventList',
      httpProcessAddress: 'HttpProcessAddress',
      notifyName: 'NotifyName',
      resourcePrefixName: 'ResourcePrefixName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventList: 'string',
      httpProcessAddress: 'string',
      notifyName: 'string',
      resourcePrefixName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetStorageNotifyConfigResponseBody extends $dara.Model {
  configType?: string;
  ossNotifyConfig?: GetStorageNotifyConfigResponseBodyOssNotifyConfig;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      configType: 'ConfigType',
      ossNotifyConfig: 'OssNotifyConfig',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configType: 'string',
      ossNotifyConfig: GetStorageNotifyConfigResponseBodyOssNotifyConfig,
      requestId: 'string',
    };
  }

  validate() {
    if(this.ossNotifyConfig && typeof (this.ossNotifyConfig as any).validate === 'function') {
      (this.ossNotifyConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

