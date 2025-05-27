// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TestEventPatternResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The value true indicates that the event pattern matches the provided JSON format. The value false indicates that the event pattern does not match the provided JSON format.
   * 
   * @example
   * true
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

