// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOperationAuditInfoDetailRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditRecordId?: number;
  /**
   * @example
   * en
   */
  lang?: string;
  static names(): { [key: string]: string } {
    return {
      auditRecordId: 'AuditRecordId',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecordId: 'number',
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

