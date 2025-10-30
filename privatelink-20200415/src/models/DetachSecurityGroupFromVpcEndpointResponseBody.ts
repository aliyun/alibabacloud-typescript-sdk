// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachSecurityGroupFromVpcEndpointResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 8D778FF9-7640-4C13-BCD6-9265CA9A2F81
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

