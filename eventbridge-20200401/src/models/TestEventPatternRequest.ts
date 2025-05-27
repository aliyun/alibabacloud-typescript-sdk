// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestEventPatternRequest extends $dara.Model {
  /**
   * @remarks
   * The event.
   * 
   * This parameter is required.
   * 
   * @example
   * {
   *     "datacontenttype": "application/json;charset=utf-8",
   *     "aliyunaccountid": "*****",
   *     "aliyunpublishtime": "2023-04-****:54:57.939Z",
   *     "data": {
   *         "resourceEventType": "****",
   *         "resourceCreateTime": "****",
   *         "resourceId": "sls-code-***-debug",
   *         "captureTime": "***"
   *     },
   *     "aliyunoriginalaccountid": "****",
   *     "specversion": "1.0",
   *     "aliyuneventbusname": "****",
   *     "id": "295e6bd2-bb72-4f70-****-204a0680ee41",
   *     "source": "acs.sls",
   *     "time": "2023-04-***:37:56Z",
   *     "aliyunregionid": "cn-***",
   *     "type": "sls:Config:****"
   * }
   */
  event?: string;
  /**
   * @remarks
   * The event pattern.
   * 
   * This parameter is required.
   * 
   * @example
   * {"key1": "value1"}
   */
  eventPattern?: string;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      eventPattern: 'EventPattern',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: 'string',
      eventPattern: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

