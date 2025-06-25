// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetAppInstanceGroupResponseBodyAppInstanceGroupModels } from "./GetAppInstanceGroupResponseBodyAppInstanceGroupModels";


export class GetAppInstanceGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * AppInstanceGroupModels
   */
  appInstanceGroupModels?: GetAppInstanceGroupResponseBodyAppInstanceGroupModels;
  /**
   * @example
   * 1CBAFFAB-B697-4049-A9B1-67E1FC5F****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      appInstanceGroupModels: 'AppInstanceGroupModels',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appInstanceGroupModels: GetAppInstanceGroupResponseBodyAppInstanceGroupModels,
      requestId: 'string',
    };
  }

  validate() {
    if(this.appInstanceGroupModels && typeof (this.appInstanceGroupModels as any).validate === 'function') {
      (this.appInstanceGroupModels as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

