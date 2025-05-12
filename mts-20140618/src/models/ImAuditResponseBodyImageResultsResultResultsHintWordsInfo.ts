// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ImAuditResponseBodyImageResultsResultResultsHintWordsInfo extends $dara.Model {
  /**
   * @remarks
   * The term hit by the detected text.
   * 
   * @example
   * Sensitive words
   */
  context?: string;
  static names(): { [key: string]: string } {
    return {
      context: 'context',
    };
  }

  static types(): { [key: string]: any } {
    return {
      context: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

