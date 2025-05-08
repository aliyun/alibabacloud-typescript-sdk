// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApplicationInstanceListResponseBodyData } from "./GetApplicationInstanceListResponseBodyData";


export class GetApplicationInstanceListResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetApplicationInstanceListResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetApplicationInstanceListResponseBodyData,
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

