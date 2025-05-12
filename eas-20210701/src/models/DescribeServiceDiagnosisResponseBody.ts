// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeServiceDiagnosisResponseBodyDiagnosisList } from "./DescribeServiceDiagnosisResponseBodyDiagnosisList";


export class DescribeServiceDiagnosisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The diagnostics list.
   */
  diagnosisList?: DescribeServiceDiagnosisResponseBodyDiagnosisList[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40325405-579C-4D82****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      diagnosisList: 'DiagnosisList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      diagnosisList: { 'type': 'array', 'itemType': DescribeServiceDiagnosisResponseBodyDiagnosisList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.diagnosisList)) {
      $dara.Model.validateArray(this.diagnosisList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

