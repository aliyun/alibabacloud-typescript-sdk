// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSparkTemplateFolderTreeResponseBody extends $dara.Model {
  /**
   * @remarks
   * The directory structure of Spark applications, which is in the tree format. Fields in the response parameter:
   * 
   * *   **Uid**: the UID of the Alibaba Cloud account.
   * 
   * *   **Type**: the application template type. Valid values: **FOLDER**
   * 
   * *   **Parent**: indicates whether a child directory exists. Valid values:
   * 
   *     *   **0**: no.
   *     *   **-1**: yes.
   * 
   * *   **Children**: the child directory.
   * 
   * *   **LastModified**: the time when applications in the directory are last modified. This value is a UNIX timestamp representing the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * *   **Name**: the name of the directory.
   * 
   * *   **Id**: the directory ID.
   * 
   * @example
   * {           "Uid":195813423****,           "Type":"FOLDER",          "Parent":-1,           "Children":[              {                     "LastModified":1647853173,               "Uid":195813423****,                     "Type":"FOLDER",                     "Parent":0,                     "Id":157,                     "Name":"t"         }       ],            "Id":725204,            "Name":"root"      }
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

