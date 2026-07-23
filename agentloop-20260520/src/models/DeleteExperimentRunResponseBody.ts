// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteExperimentRunResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 019F89BE-9190-3AAA-B5A4-DBAE3BABBBEA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

