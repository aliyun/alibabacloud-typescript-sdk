// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryOperationAuditInfoDetailRequest extends $dara.Model {
  /**
   * @remarks
   * Review record ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditRecordId?: number;
  /**
   * @remarks
   * Language for error messages in API responses. Valid values:  
   * - **zh**: Chinese.  
   * - **en**: English.  
   * 
   * Default value: **en**.
   * 
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

