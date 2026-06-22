// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanMachineEventResponseBodyDataDetails extends $dara.Model {
  /**
   * @remarks
   * The display type of valueDisplay.
   * Valid values:
   * - **download_url**: download link.
   * 
   * @example
   * download_url
   */
  infoType?: string;
  /**
   * @remarks
   * The display name of the alert event.
   * 
   * @example
   * Trojan Path
   */
  nameDisplay?: string;
  /**
   * @remarks
   * The display format of the exception event details.
   * 
   * Valid values:
   * 
   * - **text**: plain text
   * - **html**: rich text.
   * 
   * @example
   * html
   */
  type?: string;
  /**
   * @remarks
   * The additional attribute information of the exception event.
   * For example, the logon time or logon location of an unusual logon alert, or the trojan file path or trojan type of an alert.
   * 
   * @example
   * getopt
   */
  valueDisplay?: string;
  static names(): { [key: string]: string } {
    return {
      infoType: 'InfoType',
      nameDisplay: 'NameDisplay',
      type: 'Type',
      valueDisplay: 'ValueDisplay',
    };
  }

  static types(): { [key: string]: any } {
    return {
      infoType: 'string',
      nameDisplay: 'string',
      type: 'string',
      valueDisplay: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanMachineEventResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The details of the exception event.
   */
  details?: ListVirusScanMachineEventResponseBodyDataDetails[];
  /**
   * @remarks
   * The ID of the alert event.
   * 
   * @example
   * 911273
   */
  eventId?: number;
  /**
   * @remarks
   * The name (subtype) of the alert event.
   * 
   * @example
   * 恶意脚本代码执行
   */
  eventName?: string;
  /**
   * @remarks
   * The instance name.
   * 
   * @example
   * i-wz92q7m5hsbgfhdss***
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address.
   * 
   * @example
   * 172.16.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address.
   * 
   * @example
   * 10.42.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The timestamp of the last occurrence, in milliseconds.
   * 
   * @example
   * 1682046733628
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * The risk level of the alert event. Valid values:
   * - **serious**: Critical.
   * - **suspicious**: Suspicious.
   * - **remind**: Reminder.
   * 
   * @example
   * serious
   */
  level?: string;
  static names(): { [key: string]: string } {
    return {
      details: 'Details',
      eventId: 'EventId',
      eventName: 'EventName',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTimeStamp: 'LastTimeStamp',
      level: 'Level',
    };
  }

  static types(): { [key: string]: any } {
    return {
      details: { 'type': 'array', 'itemType': ListVirusScanMachineEventResponseBodyDataDetails },
      eventId: 'number',
      eventName: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTimeStamp: 'number',
      level: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.details)) {
      $dara.Model.validateArray(this.details);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanMachineEventResponseBodyPageInfo extends $dara.Model {
  /**
   * @remarks
   * The page number of the current page in a paged query.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The maximum number of entries per page in a paged query.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of alert events returned.
   * 
   * @example
   * 149
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentPage: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListVirusScanMachineEventResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the alert events.
   */
  data?: ListVirusScanMachineEventResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListVirusScanMachineEventResponseBodyPageInfo;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 2DAEF40F-8E1A-550D-8793-99C61C401DD0
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      pageInfo: 'PageInfo',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListVirusScanMachineEventResponseBodyData },
      pageInfo: ListVirusScanMachineEventResponseBodyPageInfo,
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(this.pageInfo && typeof (this.pageInfo as any).validate === 'function') {
      (this.pageInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

