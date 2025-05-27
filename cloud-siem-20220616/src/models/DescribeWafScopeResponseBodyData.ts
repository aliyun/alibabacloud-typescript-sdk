// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeWafScopeResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The ID of the Alibaba Cloud account in SIEM.
   * 
   * @example
   * 127608589417****
   */
  aliuid?: number;
  /**
   * @remarks
   * The domain names that are protected by the WAF instance.
   * 
   * @example
   * [123.com, 456.com]
   */
  domains?: string[];
  /**
   * @remarks
   * The ID of the WAF instance.
   * 
   * @example
   * waf-cn-tl123ast****
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'Aliuid',
      domains: 'Domains',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      domains: { 'type': 'array', 'itemType': 'string' },
      instanceId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.domains)) {
      $dara.Model.validateArray(this.domains);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

