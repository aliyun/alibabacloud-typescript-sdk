// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryTraceExtractJobResponseBodyData extends $dara.Model {
  /**
   * @example
   * example water mark
   */
  trace?: string;
  static names(): { [key: string]: string } {
    return {
      trace: 'Trace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      trace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

