// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The environment. Valid values:
   * 
   * *   **VPC**
   * *   **TransitRouter**
   * 
   * @example
   * VPC
   */
  environment?: string;
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the member in Cloud Firewall.
   * 
   * @example
   * 1415189284827022
   */
  memberUid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-shanghai
   */
  regionNo?: string;
  static names(): { [key: string]: string } {
    return {
      environment: 'Environment',
      lang: 'Lang',
      memberUid: 'MemberUid',
      regionNo: 'RegionNo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      environment: 'string',
      lang: 'string',
      memberUid: 'string',
      regionNo: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

