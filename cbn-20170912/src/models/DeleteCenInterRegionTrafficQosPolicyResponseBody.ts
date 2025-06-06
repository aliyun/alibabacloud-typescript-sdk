// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCenInterRegionTrafficQosPolicyResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 6DF9A765-BCD2-5C7E-8C32-C35C8A361A39
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

