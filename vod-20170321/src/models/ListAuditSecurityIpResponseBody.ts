// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAuditSecurityIpResponseBodySecurityIpList extends $dara.Model {
  /**
   * @remarks
   * The time when the security IP group was created. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-05-22T06:54:23Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The list of security IPs.
   * 
   * @example
   * 30.27.14.0/24,30.39.127.245
   */
  ips?: string;
  /**
   * @remarks
   * The time when the security IP group was last modified. The time is in the <i>yyyy-MM-dd</i>T<i>HH:mm:ss</i>Z format (UTC).
   * 
   * @example
   * 2018-05-22T06:55:14Z
   */
  modificationTime?: string;
  /**
   * @remarks
   * The name of the security IP group.
   * 
   * @example
   * Default
   */
  securityGroupName?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      ips: 'Ips',
      modificationTime: 'ModificationTime',
      securityGroupName: 'SecurityGroupName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      ips: 'string',
      modificationTime: 'string',
      securityGroupName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAuditSecurityIpResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 664BBD08-C7DB-4E*****73-9D0958D9A899
   */
  requestId?: string;
  /**
   * @remarks
   * The details of the review security IPs.
   */
  securityIpList?: ListAuditSecurityIpResponseBodySecurityIpList[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      securityIpList: 'SecurityIpList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      securityIpList: { 'type': 'array', 'itemType': ListAuditSecurityIpResponseBodySecurityIpList },
    };
  }

  validate() {
    if(Array.isArray(this.securityIpList)) {
      $dara.Model.validateArray(this.securityIpList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

