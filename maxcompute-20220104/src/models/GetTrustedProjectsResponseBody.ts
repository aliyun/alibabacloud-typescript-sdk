// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetTrustedProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bc0590416675329272834336e4387
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

