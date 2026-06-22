// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddDatasetDataResponseBody extends $dara.Model {
  /**
   * @example
   * 100
   */
  affectedRows?: number;
  /**
   * @example
   * D0173835-9E0F-508F-8BFA-9F556E59C302
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      affectedRows: 'affectedRows',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      affectedRows: 'number',
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

