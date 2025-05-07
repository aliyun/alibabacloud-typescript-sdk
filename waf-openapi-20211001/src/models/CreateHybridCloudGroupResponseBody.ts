// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateHybridCloudGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the node group.
   * 
   * @example
   * 1
   */
  data?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 48F7C7BA-0932-50EA-89AD-5B0E1***274
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'number',
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

