// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListIpamResourceCidrsResponseBodyIpamResourceCidrsOverlapDetail extends $dara.Model {
  /**
   * @remarks
   * The CIDR that overlaps with the current resource.
   * 
   * @example
   * 192.168.1.0/24
   */
  overlapResourceCidr?: string;
  /**
   * @remarks
   * Instance ID that overlaps with the current resource.
   * 
   * @example
   * vpc-aq3fjgnig5av6jb8d****
   */
  overlapResourceId?: string;
  /**
   * @remarks
   * The region of instance that overlaps with the current resource.
   * 
   * @example
   * cn-hangzhou
   */
  overlapResourceRegion?: string;
  static names(): { [key: string]: string } {
    return {
      overlapResourceCidr: 'OverlapResourceCidr',
      overlapResourceId: 'OverlapResourceId',
      overlapResourceRegion: 'OverlapResourceRegion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      overlapResourceCidr: 'string',
      overlapResourceId: 'string',
      overlapResourceRegion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

