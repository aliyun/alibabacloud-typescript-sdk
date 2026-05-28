// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TemplateConfiguration extends $dara.Model {
  /**
   * @remarks
   * The annotations of the template.
   */
  aonotations?: { [key: string]: any };
  /**
   * @remarks
   * The ID of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * sls.app.ack.ip.not_enough
   */
  id?: string;
  /**
   * @remarks
   * The language of the template.
   * 
   * @example
   * cn
   */
  lang?: string;
  /**
   * @remarks
   * The tokens that are carried by the template.
   */
  tokens?: { [key: string]: any };
  /**
   * @remarks
   * The type of the template.
   * 
   * This parameter is required.
   * 
   * @example
   * sys
   */
  type?: string;
  /**
   * @remarks
   * The version of the template.
   * 
   * @example
   * 1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      aonotations: 'aonotations',
      id: 'id',
      lang: 'lang',
      tokens: 'tokens',
      type: 'type',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aonotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      id: 'string',
      lang: 'string',
      tokens: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.aonotations) {
      $dara.Model.validateMap(this.aonotations);
    }
    if(this.tokens) {
      $dara.Model.validateMap(this.tokens);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

