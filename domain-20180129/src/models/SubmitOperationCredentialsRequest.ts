// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitOperationCredentialsRequest extends $dara.Model {
  /**
   * @example
   * 1
   */
  auditRecordId?: number;
  /**
   * @example
   * 1
   */
  auditType?: number;
  credentials?: string;
  /**
   * @example
   * en
   */
  lang?: string;
  /**
   * @example
   * 1
   */
  regType?: number;
  static names(): { [key: string]: string } {
    return {
      auditRecordId: 'AuditRecordId',
      auditType: 'AuditType',
      credentials: 'Credentials',
      lang: 'Lang',
      regType: 'RegType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditRecordId: 'number',
      auditType: 'number',
      credentials: 'string',
      lang: 'string',
      regType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

