// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallZoneRequest extends $dara.Model {
  /**
   * @example
   * cen-4xbjup276au29r****
   */
  cenId?: string;
  /**
   * @example
   * TransitRouter
   */
  environment?: string;
  /**
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @example
   * 222.212.86.7XXX
   */
  sourceIp?: string;
  /**
   * @example
   * tr-m5etmb2q7e0mxcur****
   */
  transitRouterId?: string;
  static names(): { [key: string]: string } {
    return {
      cenId: 'CenId',
      environment: 'Environment',
      lang: 'Lang',
      memberUid: 'MemberUid',
      regionNo: 'RegionNo',
      sourceIp: 'SourceIp',
      transitRouterId: 'TransitRouterId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cenId: 'string',
      environment: 'string',
      lang: 'string',
      memberUid: 'string',
      regionNo: 'string',
      sourceIp: 'string',
      transitRouterId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

