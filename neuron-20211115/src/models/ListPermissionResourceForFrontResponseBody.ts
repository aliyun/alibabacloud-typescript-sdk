// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPermissionResourceForFrontResponseBody extends $dara.Model {
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1D4A64A4-18AB-52CF-AB79-517AEC7DC63B
   */
  requestId?: string;
  resourceList?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'requestId',
      resourceList: 'resourceList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceList: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceList)) {
      $dara.Model.validateArray(this.resourceList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

