// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLogstoreStorageResponseBody extends $dara.Model {
  /**
   * @remarks
   * The name of the dedicated Logstore that is used to store full logs of Security Center. The value is fixed as **sas-log**.
   * 
   * @example
   * sas-log
   */
  logstore?: string;
  /**
   * @remarks
   * The purchased log storage capacity, in GB.
   * 
   * @example
   * 12240
   */
  preserve?: number;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * 25EC270F-5783-4416-AD7C-1EDF063A039C
   */
  requestId?: string;
  /**
   * @remarks
   * The number of days during which logs can be retained. The value is fixed as **180**, which indicates that logs can be retained for 180 days.
   * 
   * >  You are not allowed to change the value of this parameter.
   * 
   * @example
   * 180
   */
  ttl?: number;
  /**
   * @remarks
   * The used log storage capacity, in GB.
   * 
   * @example
   * 335
   */
  used?: number;
  /**
   * @remarks
   * The name of the dedicated Project that is used to store full logs of Security Center.
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

