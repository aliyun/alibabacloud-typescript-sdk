// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SubmitQueryResponseBody extends $dara.Model {
  /**
   * @remarks
   * The query ID, which is used for subsequent polling of results.
   * 
   * @example
   * d7b21d1ec4f441e79d5ba917c3283200
   */
  queryId?: string;
  static names(): { [key: string]: string } {
    return {
      queryId: 'queryId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      queryId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

