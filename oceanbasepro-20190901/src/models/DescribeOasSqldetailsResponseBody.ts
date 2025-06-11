// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeOasSQLDetailsResponseBodyData } from "./DescribeOasSqldetailsResponseBodyData";


export class DescribeOasSQLDetailsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of the SQL execution plan.
   */
  data?: DescribeOasSQLDetailsResponseBodyData;
  /**
   * @remarks
   * The request ID.
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
      data: DescribeOasSQLDetailsResponseBodyData,
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

