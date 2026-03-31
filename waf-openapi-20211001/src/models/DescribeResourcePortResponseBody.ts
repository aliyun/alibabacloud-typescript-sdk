// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcePortResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 66A98669-CC6E-4F3E-80A6-3014697B11AE
   */
  requestId?: string;
  /**
   * @remarks
   * An array of HTTP and HTTPS listener ports that are added to the WAF instance.
   */
  resourcePorts?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourcePorts: 'ResourcePorts',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourcePorts: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourcePorts)) {
      $dara.Model.validateArray(this.resourcePorts);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

