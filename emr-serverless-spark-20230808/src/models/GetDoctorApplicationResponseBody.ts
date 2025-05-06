// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorApplicationResponseBodyData } from "./GetDoctorApplicationResponseBodyData";


export class GetDoctorApplicationResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data returned.
   */
  data?: GetDoctorApplicationResponseBodyData;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorApplicationResponseBodyData,
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

