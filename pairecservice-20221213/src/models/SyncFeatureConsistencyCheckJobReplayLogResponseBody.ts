// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SyncFeatureConsistencyCheckJobReplayLogResponseBody extends $dara.Model {
  /**
   * @example
   * C7D0B48F-0105-52B9-B60A-FA7606E2234D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

