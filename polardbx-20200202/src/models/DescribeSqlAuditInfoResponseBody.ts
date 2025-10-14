// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSqlAuditInfoResponseBodyData extends $dara.Model {
  /**
   * @example
   * true
   */
  isEnabled?: boolean;
  /**
   * @example
   * polardbx-sqlaudit-log
   */
  SLSLogStore?: string;
  /**
   * @example
   * polardbx-sqlaudit-cn-hangzhou-123456789
   */
  SLSProject?: string;
  static names(): { [key: string]: string } {
    return {
      isEnabled: 'IsEnabled',
      SLSLogStore: 'SLSLogStore',
      SLSProject: 'SLSProject',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnabled: 'boolean',
      SLSLogStore: 'string',
      SLSProject: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeSqlAuditInfoResponseBody extends $dara.Model {
  data?: DescribeSqlAuditInfoResponseBodyData;
  /**
   * @example
   * DC3ABA3E-0F8A-4596-9104-F5155C******
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
      data: DescribeSqlAuditInfoResponseBodyData,
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

