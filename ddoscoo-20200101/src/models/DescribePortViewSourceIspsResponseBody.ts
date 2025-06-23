// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribePortViewSourceIspsResponseBodyIsps } from "./DescribePortViewSourceIspsResponseBodyIsps";


export class DescribePortViewSourceIspsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the details of the ISP.
   */
  isps?: DescribePortViewSourceIspsResponseBodyIsps[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * C33EB3D5-AF96-43CA-9C7E-37A81BC06A1E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isps: 'Isps',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isps: { 'type': 'array', 'itemType': DescribePortViewSourceIspsResponseBodyIsps },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.isps)) {
      $dara.Model.validateArray(this.isps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

