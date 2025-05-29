// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeModifyParameterLogResponseBodyChangelogs } from "./DescribeModifyParameterLogResponseBodyChangelogs";


export class DescribeModifyParameterLogResponseBody extends $dara.Model {
  /**
   * @remarks
   * The queried parameter modification logs.
   */
  changelogs?: DescribeModifyParameterLogResponseBodyChangelogs[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7565770E-7C45-462D-BA4A-8A5396F2CAD1
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      changelogs: 'Changelogs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changelogs: { 'type': 'array', 'itemType': DescribeModifyParameterLogResponseBodyChangelogs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.changelogs)) {
      $dara.Model.validateArray(this.changelogs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

