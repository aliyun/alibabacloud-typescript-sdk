// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebCcProtectSwitchResponseBodyProtectSwitchList } from "./DescribeWebCcProtectSwitchResponseBodyProtectSwitchList";


export class DescribeWebCcProtectSwitchResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status of each mitigation policy for the website.
   */
  protectSwitchList?: DescribeWebCcProtectSwitchResponseBodyProtectSwitchList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 3ADD9EED-CA4B-488C-BC82-01B0B899363D
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      protectSwitchList: 'ProtectSwitchList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      protectSwitchList: { 'type': 'array', 'itemType': DescribeWebCcProtectSwitchResponseBodyProtectSwitchList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.protectSwitchList)) {
      $dara.Model.validateArray(this.protectSwitchList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

