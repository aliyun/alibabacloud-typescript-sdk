// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcSchema extends $dara.Model {
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
  /**
   * @remarks
   * This parameter is required.
   */
  schema?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'id',
      pbcVersionId: 'pbcVersionId',
      requestId: 'requestId',
      schema: 'schema',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'number',
      pbcVersionId: 'number',
      requestId: 'string',
      schema: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

