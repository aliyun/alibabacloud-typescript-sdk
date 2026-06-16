// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuditRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response. Default value: **zh**. Valid values:
   * - **zh**: Chinese
   * - **en**: English.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The approval comment.
   * 
   * @example
   * 同意
   */
  auditMsg?: string;
  /**
   * @remarks
   * The association type.
   * 
   * @example
   * RULE
   */
  auditRelationType?: string;
  /**
   * @remarks
   * The approval status.
   * 
   * @example
   * AGREE
   */
  auditStatus?: string;
  /**
   * @remarks
   * The ID of the approval to update.
   * 
   * @example
   * 376773
   */
  id?: number;
  /**
   * @remarks
   * The region code.
   * 
   * @example
   * cn-hangzhou
   */
  regId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      auditMsg: 'auditMsg',
      auditRelationType: 'auditRelationType',
      auditStatus: 'auditStatus',
      id: 'id',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      auditMsg: 'string',
      auditRelationType: 'string',
      auditStatus: 'string',
      id: 'number',
      regId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

