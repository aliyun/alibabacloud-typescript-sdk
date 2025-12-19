// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadAccessTokenForJWTResponseBody extends $dara.Model {
  /**
   * @example
   * D679769C-957B-586A-AD00-5C2064DAFA7D
   */
  requestId?: string;
  /**
   * @example
   * eyAgImFsZyI6ICJSUzI1N****
   */
  workloadAccessToken?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      workloadAccessToken: 'WorkloadAccessToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      workloadAccessToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

