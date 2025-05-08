// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsRegionIdIpv6InfoResponseBodySupportIpv6Info extends $dara.Model {
  /**
   * @remarks
   * The ID of the node.
   * 
   * @example
   * cn-chengdu-xxxx-4
   */
  ensRegionId?: string;
  /**
   * @remarks
   * Specifies whether IPv6 is supported. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  supportIpv6?: boolean;
  static names(): { [key: string]: string } {
    return {
      ensRegionId: 'EnsRegionId',
      supportIpv6: 'SupportIpv6',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ensRegionId: 'string',
      supportIpv6: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

