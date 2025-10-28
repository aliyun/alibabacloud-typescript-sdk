// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindSlbResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Internet-facing SLB instance.
   * 
   * @example
   * “”
   */
  extSlbId?: string;
  /**
   * @remarks
   * The IP address of the Internet-facing SLB instance.
   * 
   * @example
   * “”
   */
  extSlbIp?: string;
  /**
   * @remarks
   * The name of the Internet-facing SLB instance.
   * 
   * @example
   * “”
   */
  extSlbName?: string;
  /**
   * @remarks
   * The ID of the vServer group for the Internet-facing SLB instance.
   * 
   * @example
   * “”
   */
  extVServerGroupId?: string;
  /**
   * @remarks
   * The ID of the internal-facing SLB instance.
   * 
   * @example
   * lb-wz96ph63r************
   */
  slbId?: string;
  /**
   * @remarks
   * The IP address of the internal-facing SLB instance.
   * 
   * @example
   * 192.16*.*.*
   */
  slbIp?: string;
  /**
   * @remarks
   * The name of the internal-facing SLB instance.
   * 
   * @example
   * test**********
   */
  slbName?: string;
  /**
   * @remarks
   * The listener port for the SLB instance.
   * 
   * @example
   * 80
   */
  slbPort?: number;
  /**
   * @remarks
   * The ID of the vServer group for the internal-facing SLB instance.
   * 
   * @example
   * “”
   */
  VServerGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      extSlbId: 'ExtSlbId',
      extSlbIp: 'ExtSlbIp',
      extSlbName: 'ExtSlbName',
      extVServerGroupId: 'ExtVServerGroupId',
      slbId: 'SlbId',
      slbIp: 'SlbIp',
      slbName: 'SlbName',
      slbPort: 'SlbPort',
      VServerGroupId: 'VServerGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      extSlbId: 'string',
      extSlbIp: 'string',
      extSlbName: 'string',
      extVServerGroupId: 'string',
      slbId: 'string',
      slbIp: 'string',
      slbName: 'string',
      slbPort: 'number',
      VServerGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class BindSlbResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code that is returned.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The data that is returned.
   */
  data?: BindSlbResponseBodyData;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * bind slb success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 23DR4FDXXXXXXXXXX
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: BindSlbResponseBodyData,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

