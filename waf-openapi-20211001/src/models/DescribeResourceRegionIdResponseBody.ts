// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourceRegionIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * F5905D3F-F674-5177-9E48-466DD3B8****
   */
  requestId?: string;
  /**
   * @remarks
   * The region IDs of the resources that are added to Web Application Firewall (WAF) by using the SDK integration mode.
   */
  resourceRegionIds?: string[];
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      resourceRegionIds: 'ResourceRegionIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      resourceRegionIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.resourceRegionIds)) {
      $dara.Model.validateArray(this.resourceRegionIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

