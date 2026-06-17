// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeVpcFirewallZoneRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the CEN instance.
   * 
   * @example
   * cen-4xbjup276au29r****
   */
  cenId?: string;
  /**
   * @remarks
   * The environment.
   * 
   * @example
   * TransitRouter
   */
  environment?: string;
  /**
   * @remarks
   * The language of the response.
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UID of the Cloud Firewall member account.
   * 
   * @example
   * 135809047715****
   */
  memberUid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionNo?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 222.212.86.7XXX
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the TransitRouter instance.
   * 
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

