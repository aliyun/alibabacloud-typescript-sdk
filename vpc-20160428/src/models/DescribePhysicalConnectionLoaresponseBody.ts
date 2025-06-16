// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType } from "./DescribePhysicalConnectionLoaresponseBodyPhysicalConnectionLoatype";


export class DescribePhysicalConnectionLOAResponseBody extends $dara.Model {
  /**
   * @remarks
   * The LOA information about the Express Connect circuit.
   */
  physicalConnectionLOAType?: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 318BB676-0A2B-43A0-9AD8-F1D34E93750F
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      physicalConnectionLOAType: 'PhysicalConnectionLOAType',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      physicalConnectionLOAType: DescribePhysicalConnectionLOAResponseBodyPhysicalConnectionLOAType,
      requestId: 'string',
    };
  }

  validate() {
    if(this.physicalConnectionLOAType && typeof (this.physicalConnectionLOAType as any).validate === 'function') {
      (this.physicalConnectionLOAType as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

