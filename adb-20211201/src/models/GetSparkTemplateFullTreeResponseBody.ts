// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkTemplateFullTreeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The directory structure of Spark applications. Fields in the response parameter:
   * 
   * *   **Uid**: the UID of the Alibaba Cloud account.
   * 
   * *   **Type**: the application template type. Valid values:
   * 
   *     *   **FOLDER**
   *     *   **FILE**
   * 
   * *   **Parent**: indicates whether a child directory exists. Valid values:
   * 
   *     *   **0**: no.
   *     *   **-1**: yes.
   * 
   * *   **Children**: the child directory.
   * 
   * *   **LastModified**: the time when applications are last modified. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **AppType**: the application type. Valid values:
   * 
   *     *   **SQL**
   *     *   **STREAMING**
   *     *   **BATCH**
   * 
   * *   **Name**: the name of the directory or application.
   * 
   * *   **Id**: the directory ID or application ID.
   * 
   * @example
   * {     "Uid": 10415777****,     "Type": "FOLDER",     "Parent": -1,     "Children": [       {         "LastModified": 1648544748,         "Uid": 104157779****,         "Type": "FILE",         "Parent": 0,         "Id": s202204132****,         "AppType": "SQL",         "Name": "f"       },       {         "LastModified": 1648544956,         "Uid": 1041577795****,         "Type": "FOLDER",         "Parent": 0,         "Id": 157,         "Name": "f3333"       }     ],     "Id": 725204,     "Name": "root"   }
   */
  data?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1AD222E9-E606-4A42-BF6D-8A4442913CEF
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

