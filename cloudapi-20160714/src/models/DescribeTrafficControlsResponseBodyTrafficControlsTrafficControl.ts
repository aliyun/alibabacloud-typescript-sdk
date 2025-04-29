// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies } from "./DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies";


export class DescribeTrafficControlsResponseBodyTrafficControlsTrafficControl extends $dara.Model {
  /**
   * @remarks
   * The default throttling value for each API.
   * 
   * @example
   * 20000
   */
  apiDefault?: number;
  /**
   * @remarks
   * The default throttling value for each app.
   * 
   * @example
   * 8000
   */
  appDefault?: number;
  /**
   * @remarks
   * The creation time (UTC) of the throttling policy.
   * 
   * @example
   * 2016-01-27T10:19:39Z
   */
  createdTime?: string;
  /**
   * @remarks
   * The description of the throttling policy.
   * 
   * @example
   * test
   */
  description?: string;
  /**
   * @remarks
   * The last modification time (UTC) of the throttling policy.
   * 
   * @example
   * 2016-01-27T10:34:38Z
   */
  modifiedTime?: string;
  /**
   * @remarks
   * The returned information about a special throttling policy. It is an array consisting of SpecialPolicy data.
   */
  specialPolicies?: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies;
  /**
   * @remarks
   * The ID of the throttling policy.
   * 
   * @example
   * cfed6c970d45481dbe136d6b5ac68c41
   */
  trafficControlId?: string;
  /**
   * @remarks
   * The name of the throttling policy.
   * 
   * @example
   * wulingtestq1
   */
  trafficControlName?: string;
  /**
   * @remarks
   * The unit to be used in the throttling policy. Valid values:
   * 
   * *   MINUTE
   * *   HOUR
   * *   DAY
   * 
   * @example
   * Minute
   */
  trafficControlUnit?: string;
  /**
   * @remarks
   * The default throttling value for each user.
   * 
   * @example
   * 15000
   */
  userDefault?: number;
  static names(): { [key: string]: string } {
    return {
      apiDefault: 'ApiDefault',
      appDefault: 'AppDefault',
      createdTime: 'CreatedTime',
      description: 'Description',
      modifiedTime: 'ModifiedTime',
      specialPolicies: 'SpecialPolicies',
      trafficControlId: 'TrafficControlId',
      trafficControlName: 'TrafficControlName',
      trafficControlUnit: 'TrafficControlUnit',
      userDefault: 'UserDefault',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDefault: 'number',
      appDefault: 'number',
      createdTime: 'string',
      description: 'string',
      modifiedTime: 'string',
      specialPolicies: DescribeTrafficControlsResponseBodyTrafficControlsTrafficControlSpecialPolicies,
      trafficControlId: 'string',
      trafficControlName: 'string',
      trafficControlUnit: 'string',
      userDefault: 'number',
    };
  }

  validate() {
    if(this.specialPolicies && typeof (this.specialPolicies as any).validate === 'function') {
      (this.specialPolicies as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

