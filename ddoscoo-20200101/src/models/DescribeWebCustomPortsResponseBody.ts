// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebCustomPortsResponseBodyWebCustomPorts } from "./DescribeWebCustomPortsResponseBodyWebCustomPorts";


export class DescribeWebCustomPortsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  /**
   * @remarks
   * An array consisting of information about supported custom ports that are used by a website.
   */
  webCustomPorts?: DescribeWebCustomPortsResponseBodyWebCustomPorts[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      webCustomPorts: 'WebCustomPorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      webCustomPorts: { 'type': 'array', 'itemType': DescribeWebCustomPortsResponseBodyWebCustomPorts },
    };
  }

  validate() {
    if(Array.isArray(this.webCustomPorts)) {
      $dara.Model.validateArray(this.webCustomPorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

