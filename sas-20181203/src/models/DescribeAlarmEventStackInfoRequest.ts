// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAlarmEventStackInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the event.
   * 
   * >  You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to query the names of events.
   * 
   * This parameter is required.
   * 
   * @example
   * Mining program
   */
  eventName?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Default value: **zh**. Valid values:
   * 
   * *   **zh**: Chinese.
   * *   **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID of the member in the resource directory.
   * 
   * >  You can call the [DescribeMonitorAccounts](~~DescribeMonitorAccounts~~) operation to obtain the IDs.
   * 
   * @example
   * 127608589417****
   */
  resourceDirectoryAccountId?: number;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.168.XX.XX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * This parameter is required.
   * 
   * @example
   * 1fbe8d16727f61d1478a674d6fa0****
   */
  uniqueInfo?: string;
  /**
   * @remarks
   * The UUID of the server to query.
   * 
   * >  You can call the [DescribeSuspEvents](~~DescribeSuspEvents~~) operation to query the UUIDs of servers.
   * 
   * This parameter is required.
   * 
   * @example
   * 18b7336e-d469-473b-af83-8e5420f9****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      lang: 'Lang',
      resourceDirectoryAccountId: 'ResourceDirectoryAccountId',
      sourceIp: 'SourceIp',
      uniqueInfo: 'UniqueInfo',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      lang: 'string',
      resourceDirectoryAccountId: 'number',
      sourceIp: 'string',
      uniqueInfo: 'string',
      uuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

