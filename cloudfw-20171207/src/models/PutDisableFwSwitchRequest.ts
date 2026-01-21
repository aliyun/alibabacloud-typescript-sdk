// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PutDisableFwSwitchRequest extends $dara.Model {
  /**
   * @example
   * 4
   */
  ipVersion?: string;
  /**
   * @remarks
   * The IP addresses.
   * 
   * >  You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["192.0.XX.XX","192.0.XX.XX"]
   */
  ipaddrList?: string[];
  /**
   * @remarks
   * The language of the content within the response. Valid values:
   * 
   * *   **zh**: Chinese (default)
   * *   **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @example
   * 1234
   */
  memberUid?: string;
  /**
   * @remarks
   * The regions.
   * 
   * >  You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["cn-hangzhou","cn-shanghai"]
   */
  regionList?: string[];
  /**
   * @remarks
   * The types of the assets.
   * 
   * > You must specify at least one of the IpaddrList, RegionList, and ResourceTypeList parameters.
   * 
   * @example
   * ["EcsPublicIp","NatEip"]
   */
  resourceTypeList?: string[];
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 192.0.XX.XX
   * 
   * @deprecated
   */
  sourceIp?: string;
  static names(): { [key: string]: string } {
    return {
      ipVersion: 'IpVersion',
      ipaddrList: 'IpaddrList',
      lang: 'Lang',
      memberUid: 'MemberUid',
      regionList: 'RegionList',
      resourceTypeList: 'ResourceTypeList',
      sourceIp: 'SourceIp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ipVersion: 'string',
      ipaddrList: { 'type': 'array', 'itemType': 'string' },
      lang: 'string',
      memberUid: 'string',
      regionList: { 'type': 'array', 'itemType': 'string' },
      resourceTypeList: { 'type': 'array', 'itemType': 'string' },
      sourceIp: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.ipaddrList)) {
      $dara.Model.validateArray(this.ipaddrList);
    }
    if(Array.isArray(this.regionList)) {
      $dara.Model.validateArray(this.regionList);
    }
    if(Array.isArray(this.resourceTypeList)) {
      $dara.Model.validateArray(this.resourceTypeList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

