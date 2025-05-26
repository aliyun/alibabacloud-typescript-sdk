// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetSparkConfigLogPathResponseBodyData } from "./GetSparkConfigLogPathResponseBodyData";


export class GetSparkConfigLogPathResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried Spark log configuration.
   */
  data?: GetSparkConfigLogPathResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 1919-xxx-ssdfsdff
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
      data: GetSparkConfigLogPathResponseBodyData,
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

