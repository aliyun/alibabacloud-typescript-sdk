// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeInstDbSlsInfoResponseBodyAuditInfo extends $dara.Model {
  /**
   * @remarks
   * The name of the LogStore.
   * 
   * @example
   * test
   */
  logStore?: string;
  /**
   * @remarks
   * The name of the Log Service project.
   * 
   * @example
   * test
   */
  project?: string;
  static names(): { [key: string]: string } {
    return {
      logStore: 'LogStore',
      project: 'Project',
    };
  }

  static types(): { [key: string]: any } {
    return {
      logStore: 'string',
      project: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeInstDbSlsInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details of the SQL audit.
   */
  auditInfo?: DescribeInstDbSlsInfoResponseBodyAuditInfo;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * DC3ABA3E-0F8A-4596-9104-F5155C******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: DescribeInstDbSlsInfoResponseBodyAuditInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.auditInfo && typeof (this.auditInfo as any).validate === 'function') {
      (this.auditInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

