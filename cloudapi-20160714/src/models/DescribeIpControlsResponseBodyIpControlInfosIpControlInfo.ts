// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpControlsResponseBodyIpControlInfosIpControlInfo extends $dara.Model {
  /**
   * @remarks
   * The time when the ACL was created. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-17T05:48:11Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the ACL.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the ACL.
   * 
   * @example
   * 7ea91319a34d48a09b5c9c871d9768b1
   */
  ipControlId?: string;
  /**
   * @remarks
   * The name of the ACL.
   * 
   * @example
   * testControl11
   */
  ipControlName?: string;
  /**
   * @remarks
   * The type of the ACL.
   * 
   * @example
   * ALLOW
   */
  ipControlType?: string;
  /**
   * @remarks
   * The time when the ACL was modified. The time is displayed in UTC.
   * 
   * @example
   * 2018-01-17T06:00:38Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The ID of the region in which the ACL is deployed.
   * 
   * @example
   * cn-qingdao
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      description: 'Description',
      ipControlId: 'IpControlId',
      ipControlName: 'IpControlName',
      ipControlType: 'IpControlType',
      modifiedTime: 'ModifiedTime',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      ipControlId: 'string',
      ipControlName: 'string',
      ipControlType: 'string',
      modifiedTime: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

