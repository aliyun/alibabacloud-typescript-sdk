// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ModifyDesktopsPolicyGroupResponseBodyModifyResults } from "./ModifyDesktopsPolicyGroupResponseBodyModifyResults";


export class ModifyDesktopsPolicyGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request results.
   */
  modifyResults?: ModifyDesktopsPolicyGroupResponseBodyModifyResults[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      modifyResults: 'ModifyResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modifyResults: { 'type': 'array', 'itemType': ModifyDesktopsPolicyGroupResponseBodyModifyResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.modifyResults)) {
      $dara.Model.validateArray(this.modifyResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

