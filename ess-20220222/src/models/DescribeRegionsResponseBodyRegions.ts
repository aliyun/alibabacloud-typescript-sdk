// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionsResponseBodyRegions extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the current region supports scaling groups that reside in the classic network. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  classicUnavailable?: boolean;
  /**
   * @remarks
   * The region name.
   * 
   * @example
   * China (Beijing)
   */
  localName?: string;
  /**
   * @remarks
   * The region endpoint.
   * 
   * @example
   * ess.aliyuncs.com
   */
  regionEndpoint?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the current region supports scaling groups that reside in virtual private clouds (VPCs). Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * false
   */
  vpcUnavailable?: boolean;
  static names(): { [key: string]: string } {
    return {
      classicUnavailable: 'ClassicUnavailable',
      localName: 'LocalName',
      regionEndpoint: 'RegionEndpoint',
      regionId: 'RegionId',
      vpcUnavailable: 'VpcUnavailable',
    };
  }

  static types(): { [key: string]: any } {
    return {
      classicUnavailable: 'boolean',
      localName: 'string',
      regionEndpoint: 'string',
      regionId: 'string',
      vpcUnavailable: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

