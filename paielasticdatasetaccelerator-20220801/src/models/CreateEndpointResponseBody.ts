// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateEndpointResponseBody extends $dara.Model {
  /**
   * @example
   * end-5zk866779me51jgu3w
   */
  endpointId?: string;
  /**
   * @example
   * A731A84D-55C9-44F7-99BB-E1CF0CF19197
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      endpointId: 'EndpointId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endpointId: 'string',
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

