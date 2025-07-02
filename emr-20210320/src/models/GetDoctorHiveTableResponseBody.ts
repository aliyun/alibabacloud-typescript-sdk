// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetDoctorHiveTableResponseBodyData } from "./GetDoctorHiveTableResponseBodyData";


export class GetDoctorHiveTableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The analysis results of the Hive table.
   */
  data?: GetDoctorHiveTableResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * DD6B1B2A-5837-5237-ABE4-FF0C8944****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetDoctorHiveTableResponseBodyData,
      requestId: 'string',
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

