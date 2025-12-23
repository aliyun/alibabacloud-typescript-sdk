// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQueryProcessorAnalyzerResultsRequest extends $dara.Model {
  /**
   * @remarks
   * The text to be tested.
   * 
   * This parameter is required.
   * 
   * @example
   * "abcde"
   */
  text?: string;
  static names(): { [key: string]: string } {
    return {
      text: 'text',
    };
  }

  static types(): { [key: string]: any } {
    return {
      text: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

