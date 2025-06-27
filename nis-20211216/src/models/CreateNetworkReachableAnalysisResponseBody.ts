// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateNetworkReachableAnalysisResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the task for analyzing network reachability.
   * 
   * @example
   * nra-2fede05617494417****
   */
  networkReachableAnalysisId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A7F0D6EC-E19E-58AC-AC9F-08036763960F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      networkReachableAnalysisId: 'NetworkReachableAnalysisId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      networkReachableAnalysisId: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

