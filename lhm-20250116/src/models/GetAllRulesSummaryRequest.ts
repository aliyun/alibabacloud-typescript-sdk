// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAllRulesSummaryRequest extends $dara.Model {
  /**
   * @remarks
   * The source dialect.
   * 
   * @example
   * postgresql
   */
  source?: string;
  /**
   * @remarks
   * The target dialect.
   * 
   * @example
   * hologres
   */
  target?: string;
  static names(): { [key: string]: string } {
    return {
      source: 'source',
      target: 'target',
    };
  }

  static types(): { [key: string]: any } {
    return {
      source: 'string',
      target: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

