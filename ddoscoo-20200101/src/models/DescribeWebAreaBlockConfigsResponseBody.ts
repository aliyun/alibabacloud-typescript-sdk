// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs } from "./DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs";


export class DescribeWebAreaBlockConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * An array that consists of the configurations of the Location Blacklist (Domain Names) policy.
   */
  areaBlockConfigs?: DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 0bcf28g5-d57c-11e7-9bs0-d89d6717dxbc
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      areaBlockConfigs: 'AreaBlockConfigs',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      areaBlockConfigs: { 'type': 'array', 'itemType': DescribeWebAreaBlockConfigsResponseBodyAreaBlockConfigs },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.areaBlockConfigs)) {
      $dara.Model.validateArray(this.areaBlockConfigs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

