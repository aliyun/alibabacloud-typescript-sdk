// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspEventQuaraFilesResponseBodyQuaraFiles extends $dara.Model {
  /**
   * @remarks
   * The name of the event.
   * 
   * @example
   * WEBSHELL
   */
  eventName?: string;
  /**
   * @remarks
   * The type of the event.
   * 
   * @example
   * WebshellQuaraEventType
   */
  eventType?: string;
  /**
   * @remarks
   * The ID of the quarantined file.
   * 
   * @example
   * 26918
   */
  id?: number;
  /**
   * @remarks
   * The instance ID of the asset.
   * 
   * @example
   * i-2ze9t1qp36n1436m****
   */
  instanceId?: string;
  /**
   * @remarks
   * The name of the server on which the quarantined file is located.
   * 
   * @example
   * iZwz98dkiw3vbrtqrt5v****
   */
  instanceName?: string;
  /**
   * @remarks
   * The public IP address of the server on which the quarantined file is located.
   * 
   * @example
   * 47.XX.XX.131
   */
  internetIp?: string;
  /**
   * @remarks
   * The private IP address of the server on which the quarantined file is located.
   * 
   * @example
   * 172.16.XX.XX
   */
  intranetIp?: string;
  /**
   * @remarks
   * The public IP address of the server on which the quarantined file is located.
   * 
   * @example
   * 47.XX.XX.131
   */
  ip?: string;
  /**
   * @remarks
   * The download link of the quarantined file.
   * 
   * @example
   * https://xxx.xxx/xxx
   */
  link?: string;
  /**
   * @remarks
   * The MD5 hash value of the quarantined file.
   * 
   * @example
   * 5ddebe926acc7ed39a664409bfd0ec10
   */
  md5?: string;
  /**
   * @remarks
   * The time when the quarantined file was last modified.
   * 
   * @example
   * 2020-06-11 20:37:08
   */
  modifyTime?: string;
  /**
   * @remarks
   * The path to the quarantined file on the server.
   * 
   * @example
   * /var/www/html/webshell-sample-master/others/defc3e21bab59e2a2ab49f7eda99f65f83d4d349.jpg
   */
  path?: string;
  /**
   * @remarks
   * The status of the quarantined file. Valid values:
   * 
   * *   **quaraFailed**: The file fails to be quarantined.
   * *   **quaraDone**: The file is quarantined.
   * *   **quaraing**: The file is being quarantined.
   * *   **rollbackFailed**: The system fails to cancel quarantining the file.
   * *   **rollbackDone**: The system cancelled quarantining the file.
   * *   **rollbacking**: The system is cancelling quarantining the file.
   * 
   * @example
   * rollbackDone
   */
  status?: string;
  /**
   * @remarks
   * The unique ID of the event.
   * 
   * @example
   * 228f890e56eae9eec6a42c7ea801b538
   */
  tag?: string;
  /**
   * @remarks
   * The UUID of the server.
   * 
   * @example
   * 04a0e735-ad32-4835-b635-0458d77b****
   */
  uuid?: string;
  static names(): { [key: string]: string } {
    return {
      eventName: 'EventName',
      eventType: 'EventType',
      id: 'Id',
      instanceId: 'InstanceId',
      instanceName: 'InstanceName',
      internetIp: 'InternetIp',
      intranetIp: 'IntranetIp',
      ip: 'Ip',
      link: 'Link',
      md5: 'Md5',
      modifyTime: 'ModifyTime',
      path: 'Path',
      status: 'Status',
      tag: 'Tag',
      uuid: 'Uuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eventName: 'string',
      eventType: 'string',
      id: 'number',
      instanceId: 'string',
      instanceName: 'string',
      internetIp: 'string',
      intranetIp: 'string',
      ip: 'string',
      link: 'string',
      md5: 'string',
      modifyTime: 'string',
      path: 'string',
      status: 'string',
      tag: 'string',
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

export class DescribeSuspEventQuaraFilesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries returned on the current page.
   * 
   * @example
   * 7
   */
  count?: number;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * An array that consists of the quarantined files.
   */
  quaraFiles?: DescribeSuspEventQuaraFilesResponseBodyQuaraFiles[];
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 32A73759-4C0F-4801-BE98-901223ACEE9A
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 38
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      quaraFiles: 'QuaraFiles',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      currentPage: 'number',
      pageSize: 'number',
      quaraFiles: { 'type': 'array', 'itemType': DescribeSuspEventQuaraFilesResponseBodyQuaraFiles },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.quaraFiles)) {
      $dara.Model.validateArray(this.quaraFiles);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

