// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateDynamicSettingsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 5FFD9ED4-C2EC-4E89-B22B-1ACB6F******
   */
  requestId?: string;
  /**
   * @remarks
   * The result of updating the dynamic configurations of the cluster. A value of true indicates that the update was successful, and a value of false indicates that the update failed.
   */
  result?: boolean;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

