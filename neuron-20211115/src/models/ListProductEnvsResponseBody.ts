// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListProductEnvsResponseBody extends $dara.Model {
  envList?: string[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3239281273464326823
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      envList: 'envList',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      envList: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.envList)) {
      $dara.Model.validateArray(this.envList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

