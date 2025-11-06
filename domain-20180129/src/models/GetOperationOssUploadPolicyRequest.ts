// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetOperationOssUploadPolicyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  auditType?: number;
  /**
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

