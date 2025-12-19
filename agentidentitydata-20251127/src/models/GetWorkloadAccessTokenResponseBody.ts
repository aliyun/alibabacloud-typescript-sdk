// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWorkloadAccessTokenResponseBody extends $dara.Model {
  /**
   * @example
   * 1E85BA86-0955-5841-9679-9C33867E460D
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

