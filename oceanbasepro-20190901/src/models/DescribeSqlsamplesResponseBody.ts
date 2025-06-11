// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeSQLSamplesResponseBodyData } from "./DescribeSqlsamplesResponseBodyData";


export class DescribeSQLSamplesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of sample data of slow query execution details.
   */
  data?: DescribeSQLSamplesResponseBodyData[];
  /**
   * @remarks
   * Request ID.
   * 
   * @example
   * EE205C00-30E4-****-****-87E3A8A2AA0C
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
      data: { 'type': 'array', 'itemType': DescribeSQLSamplesResponseBodyData },
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

