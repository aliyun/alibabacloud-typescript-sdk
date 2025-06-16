// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AllocateEipSegmentAddressResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the contiguous EIP group.
   * 
   * @example
   * eipsg-2zett8ba055tbsxme****
   */
  eipSegmentInstanceId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F7A6301A-64BA-41EC-8284-8F4838C15D1F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      eipSegmentInstanceId: 'EipSegmentInstanceId',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      eipSegmentInstanceId: 'string',
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

