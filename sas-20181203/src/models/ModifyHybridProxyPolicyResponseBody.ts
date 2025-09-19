// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyHybridProxyPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The message of the request.
   * 
   * @example
   * clusterName data not exist
   */
  messgae?: string;
  /**
   * @remarks
   * The ID of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * A4EB8B1C-1DEC-5E18-BCD0-D1BBB3936FA7
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      messgae: 'Messgae',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      messgae: 'string',
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

