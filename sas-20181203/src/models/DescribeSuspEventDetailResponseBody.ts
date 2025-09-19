// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventDetailResponseBodyDetails extends $dara.Model {
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
   * The attribute information about the exception. For example, if the exception is associated with an alert that is triggered by an unusual logon, the information can include the time when the logon is initiated and the location from which the logon is initiated. If the exception is associated with an alert that is triggered by a webshell file, the information can include the path of the trojan file and the type of the trojan.
   * 
   * @example
   * getopt
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      nameDisplay: 'NameDisplay',
      type: 'Type',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nameDisplay: 'string',
      type: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSuspEventDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the online processing of exceptions is supported, such as blocking an exception, adding an exception to the whitelist, and ignoring an exception. Valid values:
   * 
   * *   **true**: The online processing of exceptions is supported.
   * *   **false**: The online processing of exceptions is not supported.
   * 
   * @example
   * true
   */
  canBeDealOnLine?: boolean;
  /**
   * @remarks
   * The data source of the exception.
   * 
   * @example
   * aegis_suspicious_****
   */
  dataSource?: string;
  /**
   * @remarks
   * An array that consists of the details of the exception.
   */
  details?: DescribeSuspEventDetailResponseBodyDetails[];
  /**
   * @remarks
   * The description of the exception.
   * 
   * @example
   * The detection model found a suspicious Webshell file on your server, which may be a backdoor file implanted to maintain permissions after the attacker successfully invaded the website.
   */
  eventDesc?: string;
  /**
   * @remarks
   * The name of the exception.
   * 
   * @example
   * WEBSHELL
   */
  eventName?: string;
  /**
   * @remarks
   * The status of the exception. Valid values:
   * 
   * *   **1**: pending handling
   * *   **2**: ignored
   * *   **4**: confirmed
   * *   **8**: marked as a false positive
   * *   **16**: handling
   * *   **32**: handled
   * *   **64**: expired
   * 
   * @example
   * 1
   */
  eventStatus?: string;
  /**
   * @remarks
   * The type of the exception.
   * 
   * @example
   * Malicious Software-Variable Trojan
   */
  eventTypeDesc?: string;
  /**
   * @remarks
   * The ID of the exception.
   * 
   * @example
   * 11416624
   */
  id?: number;
  /**
   * @remarks
   * The name of the server on which the exception was detected.
   * 
   * @example
   * ca_cpm_****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server on which the exception was detected.
   * 
   * @example
   * 101.132.XX.XX
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server on which the exception was detected.
   * 
   * @example
   * 172.26.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The time when the exception was last detected.
   * 
   * @example
   * 2018-10-30 11:43:46
   */
  lastTime?: string;
  /**
   * @remarks
   * The risk level of the exception. Valid values:
   * 
   * *   **serious**
   * *   **suspicious**
   * *   **remind**
   * 
   * @example
   * serious
   */
  level?: string;
  /**
   * @remarks
   * The code that indicates the handling result of the exception.
   * 
   * @example
   * quara.Succes
   */
  operateErrorCode?: string;
  /**
   * @remarks
   * The message that indicates the handling result of the exception.
   * 
   * @example
   * success
   */
  operateMsg?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0B48AB3C-84FC-424D-A01D-B9270EF46038
   */
  requestId?: string;
  /**
   * @remarks
   * The edition of Security Center in which the exception can be detected. Valid values:
   * 
   * *   **0**: Basic edition
   * *   **1**: Advanced edition
   * *   **2**: Enterprise edition
   * 
   * @example
   * 1
   */
  saleVersion?: string;
  /**
   * @remarks
   * The UUID of the server on which the exception was detected.
   * 
   * @example
   * bffb12c3-590a-4db2-b538-****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      canBeDealOnLine: 'CanBeDealOnLine',
      dataSource: 'DataSource',
      details: 'Details',
      eventDesc: 'EventDesc',
      eventName: 'EventName',
      eventStatus: 'EventStatus',
      eventTypeDesc: 'EventTypeDesc',
      id: 'Id',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      lastTime: 'LastTime',
      level: 'Level',
      operateErrorCode: 'OperateErrorCode',
      operateMsg: 'OperateMsg',
      requestId: 'RequestId',
      saleVersion: 'SaleVersion',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canBeDealOnLine: 'boolean',
      dataSource: 'string',
      details: { 'type': 'array', 'itemType': DescribeSuspEventDetailResponseBodyDetails },
      eventDesc: 'string',
      eventName: 'string',
      eventStatus: 'string',
      eventTypeDesc: 'string',
      id: 'number',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      lastTime: 'string',
      level: 'string',
      operateErrorCode: 'string',
      operateMsg: 'string',
      requestId: 'string',
      saleVersion: 'string',
      uuid: 'string',
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

