// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLogSyncToSLSResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The log synchronization status. Valid values:
   * - on: Synchronization is enabled.
   * - off: Synchronization is disabled.
   * 
   * @example
   * off
   */
  status?: string;
  /**
   * @remarks
   * The Simple Log Service Logstore.
   * 
   * @example
   * adbmysql-audit-log
   */
  targetLogStore?: string;
  /**
   * @remarks
   * The Simple Log Service project.
   * 
   * @example
   * log-service-****-cn-shenzhen
   */
  targetProject?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      targetLogStore: 'TargetLogStore',
      targetProject: 'TargetProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      targetLogStore: 'string',
      targetProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetLogSyncToSLSResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetLogSyncToSLSResponseBodyData;
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
      data: GetLogSyncToSLSResponseBodyData,
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

