// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitOperationCredentialsRequest extends $dara.Model {
  /**
   * @remarks
   * Review record ID.
   * 
   * @example
   * 1
   */
  auditRecordId?: number;
  /**
   * @remarks
   * Review type. Valid value:  
   * **1**: Offline domain name transfer.
   * 
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @remarks
   * Certificate materials pending review.
   */
  credentials?: string;
  /**
   * @remarks
   * Language of the error message returned by the API. Valid values:  
   * - **zh**: Chinese.  
   * - **en**: English.  
   * 
   * Default value: **en**.
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * Registrant type. Valid values:  
   * - **1**: Individual.  
   * - **2**: Enterprise.
   * 
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

