// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncComponentTemplateConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  /**
   * @example
   * ture
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

