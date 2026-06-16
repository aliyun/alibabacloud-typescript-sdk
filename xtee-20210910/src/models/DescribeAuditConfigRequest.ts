// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAuditConfigRequest extends $dara.Model {
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
   * The approval type.
   * 
   * @example
   * RULE
   */
  auditRelationType?: string;
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
      auditRelationType: 'auditRelationType',
      regId: 'regId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      auditRelationType: 'string',
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

