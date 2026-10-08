// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CancelOperationAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The audit record ID. You can query the audit record ID by using the [QueryOperationAuditInfoList](https://help.aliyun.com/document_detail/172568.html) API.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditRecordId?: number;
  /**
   * @remarks
   * The language of the error message returned by the API. Valid values:
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

