// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLiveDelayConfigResponseBodyDelayConfigListDelayConfig extends $dara.Model {
  app?: string;
  delayTime?: string;
  domain?: string;
  stream?: string;
  taskTriggerMode?: string;
  static names(): { [key: string]: string } {
    return {
      app: 'App',
      delayTime: 'DelayTime',
      domain: 'Domain',
      stream: 'Stream',
      taskTriggerMode: 'TaskTriggerMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      app: 'string',
      delayTime: 'string',
      domain: 'string',
      stream: 'string',
      taskTriggerMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveDelayConfigResponseBodyDelayConfigList extends $dara.Model {
  delayConfig?: ListLiveDelayConfigResponseBodyDelayConfigListDelayConfig[];
  static names(): { [key: string]: string } {
    return {
      delayConfig: 'DelayConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayConfig: { 'type': 'array', 'itemType': ListLiveDelayConfigResponseBodyDelayConfigListDelayConfig },
    };
  }

  validate() {
    if(Array.isArray(this.delayConfig)) {
      $dara.Model.validateArray(this.delayConfig);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListLiveDelayConfigResponseBody extends $dara.Model {
  delayConfigList?: ListLiveDelayConfigResponseBodyDelayConfigList;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A3136B58-5876-4168-83CA-B562781981A0
   */
  requestId?: string;
  /**
   * @remarks
   * The number of stream delay configurations.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      delayConfigList: 'DelayConfigList',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      delayConfigList: ListLiveDelayConfigResponseBodyDelayConfigList,
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    if(this.delayConfigList && typeof (this.delayConfigList as any).validate === 'function') {
      (this.delayConfigList as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

