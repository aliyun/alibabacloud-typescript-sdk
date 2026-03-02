// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PbcApiSchema extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiSchema?: string;
  /**
   * @example
   * 1
   */
  id?: number;
  pbcVersionId?: number;
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      apiSchema: 'apiSchema',
      id: 'id',
      pbcVersionId: 'pbcVersionId',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiSchema: 'string',
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

