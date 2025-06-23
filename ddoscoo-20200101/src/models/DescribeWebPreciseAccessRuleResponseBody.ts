// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList } from "./DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList";


export class DescribeWebPreciseAccessRuleResponseBody extends $dara.Model {
  /**
   * @remarks
   * The configuration of the accurate access control rule that is created for the website.
   */
  preciseAccessConfigList?: DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 209EEFBF-B0C7-441E-8C28-D0945A57A638
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      preciseAccessConfigList: 'PreciseAccessConfigList',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      preciseAccessConfigList: { 'type': 'array', 'itemType': DescribeWebPreciseAccessRuleResponseBodyPreciseAccessConfigList },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.preciseAccessConfigList)) {
      $dara.Model.validateArray(this.preciseAccessConfigList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

