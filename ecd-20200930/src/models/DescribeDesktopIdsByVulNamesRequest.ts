// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDesktopIdsByVulNamesRequest extends $dara.Model {
  /**
   * @remarks
   * The necessity level for vulnerability fixing, which indicates the urgency of the vulnerability. Valid values:
   * - asap: high
   * - later: medium
   * - nntf: low
   * 
   * @example
   * asap
   */
  necessity?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou+dir-363353****
   */
  officeSiteId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The vulnerability type. Valid values:
   * 
   * - cve: Linux software vulnerability
   * - sys: Windows system vulnerability
   * 
   * This parameter is required.
   * 
   * @example
   * cve
   */
  type?: string;
  /**
   * @remarks
   * The array of vulnerability names.
   * 
   * This parameter is required.
   */
  vulName?: string[];
  static names(): { [key: string]: string } {
    return {
      necessity: 'Necessity',
      officeSiteId: 'OfficeSiteId',
      regionId: 'RegionId',
      type: 'Type',
      vulName: 'VulName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      necessity: 'string',
      officeSiteId: 'string',
      regionId: 'string',
      type: 'string',
      vulName: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.vulName)) {
      $dara.Model.validateArray(this.vulName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

