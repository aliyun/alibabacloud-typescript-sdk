// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationOssUploadPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * Review type. Valid value:  
   * 
   * **1**: Offline domain name transfer.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditType?: number;
  /**
   * @remarks
   * Language of error messages returned by the API. Valid values:  
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
      auditType: 'AuditType',
      lang: 'Lang',
    };
  }

  static types(): { [key: string]: any } {
    return {
      auditType: 'number',
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

