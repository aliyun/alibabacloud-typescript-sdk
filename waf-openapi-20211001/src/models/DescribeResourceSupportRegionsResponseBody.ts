// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceSupportRegionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 58FD****-3D56-5DE8-91E0-96A26BABFFDD
   */
  requestId?: string;
  /**
   * @remarks
   * An array of region IDs of the CLB and ECS instances that are added to WAF in cloud native mode.
   */
  supportRegions?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      supportRegions: 'SupportRegions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      supportRegions: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.supportRegions)) {
      $dara.Model.validateArray(this.supportRegions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

