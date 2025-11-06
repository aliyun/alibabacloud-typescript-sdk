// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitOperationAuditInfoRequest extends $dara.Model {
  auditInfo?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * example.com,example.org
   */
  domainName?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      auditInfo: 'AuditInfo',
      auditType: 'AuditType',
      domainName: 'DomainName',
      id: 'Id',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditInfo: 'string',
      auditType: 'number',
      domainName: 'string',
      id: 'number',
      lang: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

