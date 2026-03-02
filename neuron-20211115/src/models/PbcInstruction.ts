// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcInstruction extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  document?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  /**
   * @example
   * 2
   */
  pbcVersionId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      document: 'document',
      id: 'id',
      pbcVersionId: 'pbcVersionId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      document: 'string',
      id: 'number',
      pbcVersionId: 'number',
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

