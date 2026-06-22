// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogstoreStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated Logstore in which full logs of Security Center are stored. The value is fixed as **sas-log**.
   * 
   * @example
   * sas-log
   */
  logstore?: string;
  /**
   * @remarks
   * The purchased log analysis storage capacity. Unit: GB.
   * 
   * @example
   * 12240
   */
  preserve?: number;
  /**
   * @remarks
   * The ID of the request. Alibaba Cloud generates a unique identifier for each request. You can use the ID to troubleshoot issues.
   * 
   * @example
   * 25EC270F-5783-4416-AD7C-1EDF063A039C
   */
  requestId?: string;
  /**
   * @remarks
   * The number of days for which logs are retained. The value is fixed as **180**, which indicates that logs can be retained for 180 days.
   * > Security Center does not support adjusting the log retention period.
   * 
   * @example
   * 180
   */
  ttl?: number;
  /**
   * @remarks
   * The used log analysis storage capacity. Unit: GB.
   * 
   * @example
   * 335
   */
  used?: number;
  /**
   * @remarks
   * The name of the dedicated Project in which full logs of Security Center are stored.
   * 
   * @example
   * sas-log-XXXX-cn-hangzhou
   */
  userProject?: string;
  static names(): { [key: string]: string } {
    return {
      logstore: 'Logstore',
      preserve: 'Preserve',
      requestId: 'RequestId',
      ttl: 'Ttl',
      used: 'Used',
      userProject: 'UserProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logstore: 'string',
      preserve: 'number',
      requestId: 'string',
      ttl: 'number',
      used: 'number',
      userProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

