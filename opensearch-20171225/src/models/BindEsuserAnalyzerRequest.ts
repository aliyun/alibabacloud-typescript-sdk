// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BindESUserAnalyzerRequest extends $dara.Model {
  /**
   * @remarks
   * The request parameters.
   * 
   * @example
   * {
   *   "name": "kevintest-analyzer"
   * }
   */
  body?: any;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: 'any',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

