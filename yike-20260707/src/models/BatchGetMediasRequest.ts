// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetMediasRequest extends $dara.Model {
  /**
   * @example
   * 3600
   */
  authTimeout?: number;
  /**
   * @example
   * ******b48fb04483915d4f2cd8******,******c48fb37407365d4f2cd8******
   */
  mediaIds?: string;
  static names(): { [key: string]: string } {
    return {
      authTimeout: 'AuthTimeout',
      mediaIds: 'MediaIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authTimeout: 'number',
      mediaIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

