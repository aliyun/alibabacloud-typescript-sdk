// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ResetRuleHitCountRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 211fd804-30f5-470f-ab26-c465a4****
   */
  aclUuid?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 112.64.126.XXX
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      aclUuid: 'AclUuid',
      lang: 'Lang',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aclUuid: 'string',
      lang: 'string',
      sourceIp: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

