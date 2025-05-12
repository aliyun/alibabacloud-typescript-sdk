// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImAuditResponseBodyTextResultsResultResultsDetailsContexts extends $dara.Model {
  /**
   * @remarks
   * The term that the moderated text hits. If the text hits a term, the term is returned. If the text hits the algorithmic model, this parameter is not returned.
   * 
   * @example
   * Door-to-door service
   */
  context?: string;
  /**
   * @remarks
   * The code of the custom text library. This parameter is returned if the moderated text hits a term in the custom text library.
   * 
   * @example
   * 123456
   */
  libCode?: string;
  /**
   * @remarks
   * The name of the custom text library. This parameter is returned if the moderated text hits a term in the custom text library.
   * 
   * @example
   * Name of your custom text library
   */
  libName?: string;
  /**
   * @remarks
   * The position of the term that the moderated text hits in the original text.
   */
  positions?: string[];
  /**
   * @remarks
   * The behavior rule. This parameter is returned if the moderated text hits the behavior rule. Valid values:
   * 
   * *   user_id
   * *   ip
   * *   umid
   * *   content
   * *   similar_content
   * *   imei
   * *   imsi
   * 
   * @example
   * ip
   */
  ruleType?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
      libCode: 'libCode',
      libName: 'libName',
      positions: 'positions',
      ruleType: 'ruleType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
      libCode: 'string',
      libName: 'string',
      positions: { 'type': 'array', 'itemType': 'string' },
      ruleType: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.positions)) {
      $dara.Model.validateArray(this.positions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

