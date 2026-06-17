// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceTypeAutoEnableResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 7447795A-39AB-52CB-8F92-128DF******
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether traffic redirection is enabled by default.
   */
  resourceTypeAutoEnable?: { [key: string]: boolean };
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceTypeAutoEnable: 'ResourceTypeAutoEnable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceTypeAutoEnable: { 'type': 'map', 'keyType': 'string', 'valueType': 'boolean' },
    };
  }

  validate() {
    if(this.resourceTypeAutoEnable) {
      $dara.Model.validateMap(this.resourceTypeAutoEnable);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

