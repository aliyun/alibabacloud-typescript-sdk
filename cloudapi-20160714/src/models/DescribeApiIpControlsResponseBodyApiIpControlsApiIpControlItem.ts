// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeApiIpControlsResponseBodyApiIpControlsApiIpControlItem extends $dara.Model {
  /**
   * @remarks
   * The ID of the API.
   * 
   * @example
   * 46fbb52840d146f186e38e8e70fc8c90
   */
  apiId?: string;
  /**
   * @remarks
   * The name of the API.
   * 
   * @example
   * testapi
   */
  apiName?: string;
  /**
   * @remarks
   * The time of binding.
   * 
   * @example
   * 2016-07-23T08:28:48Z
   */
  boundTime?: string;
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * @example
   * dd05f1c54d6749eda95f9fa6d491449a
   */
  ipControlId?: string;
  /**
   * @remarks
   * The name of the ACL.
   * 
   * @example
   * testControlName
   */
  ipControlName?: string;
  static names(): { [key: string]: string } {
    return {
      apiId: 'ApiId',
      apiName: 'ApiName',
      boundTime: 'BoundTime',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiId: 'string',
      apiName: 'string',
      boundTime: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

