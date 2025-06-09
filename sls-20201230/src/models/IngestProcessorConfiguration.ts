// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class IngestProcessorConfiguration extends $dara.Model {
  /**
   * @example
   * keep
   */
  parseFail?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * * | project content
   */
  spl?: string;
  static names(): { [key: string]: string } {
    return {
      parseFail: 'parseFail',
      spl: 'spl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      parseFail: 'string',
      spl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

