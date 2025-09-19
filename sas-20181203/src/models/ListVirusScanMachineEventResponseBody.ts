// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListVirusScanMachineEventResponseBodyDataDetails extends $dara.Model {
  /**
   * @remarks
   * The display type of the value for ValueDisplay. Valid value:
   * 
   * *   **download_url**, which indicates a download URL.
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
   * The format in which the details of the exception are displayed.
   * 
   * Valid values:
   * 
   * *   **text**
   * *   **html**
   * 
   * @example
   * html
   */
  type?: string;
  /**
   * @remarks
   * The attribute information about the exception. The information includes the logon time or location of an alert triggered by an unusual logon, and the trojan file path or trojan type of an alert.
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
   * The details of the exception.
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
   * The name of the alert event. The value indicates a subtype.
   * 
   * @example
   * Unusual Logon
   */
  eventName?: string;
  /**
   * @remarks
   * The name of the instance.
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
   * The timestamp when the alert event was last generated. Unit: milliseconds.
   * 
   * @example
   * 1682046733628
   */
  lastTimeStamp?: number;
  /**
   * @remarks
   * The risk level of the alert event. Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
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
   * The page number.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
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
   * The details of the alert event.
   */
  data?: ListVirusScanMachineEventResponseBodyData[];
  /**
   * @remarks
   * The pagination information.
   */
  pageInfo?: ListVirusScanMachineEventResponseBodyPageInfo;
  /**
   * @remarks
   * The request ID.
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

