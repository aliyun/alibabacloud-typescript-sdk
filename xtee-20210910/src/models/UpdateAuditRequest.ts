// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAuditRequest extends $dara.Model {
  /**
   * @remarks
   * Sets the language type for requests and received messages, default value is **zh**. Values:
   * - **zh**: Chinese
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * Approval comments
   * 
   * @example
   * 同意
   */
  auditMsg?: string;
  /**
   * @remarks
   * Associated type
   * 
   * @example
   * RULE
   */
  auditRelationType?: string;
  /**
   * @remarks
   * Status
   * 
   * @example
   * AGREE
   */
  auditStatus?: string;
  /**
   * @remarks
   * The ID of the approval to be updated.
   * 
   * @example
   * 376773
   */
  id?: number;
  /**
   * @remarks
   * Region code
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

