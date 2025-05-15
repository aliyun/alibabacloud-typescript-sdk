// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CheckServiceDeployableResponseBodyCheckResults } from "./CheckServiceDeployableResponseBodyCheckResults";


export class CheckServiceDeployableResponseBody extends $dara.Model {
  /**
   * @remarks
   * Inspection result.
   */
  checkResults?: CheckServiceDeployableResponseBodyCheckResults[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 06BF8F22-02DC-4750-83DF-3FFC11C065EA
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      checkResults: 'CheckResults',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkResults: { 'type': 'array', 'itemType': CheckServiceDeployableResponseBodyCheckResults },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.checkResults)) {
      $dara.Model.validateArray(this.checkResults);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

