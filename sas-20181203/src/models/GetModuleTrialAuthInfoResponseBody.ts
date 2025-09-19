// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetModuleTrialAuthInfoResponseBodyDataTrialRecordList extends $dara.Model {
  /**
   * @remarks
   * The quota.
   * 
   * @example
   * 100
   */
  authLimit?: number;
  /**
   * @remarks
   * The list of quotas. This parameter is available if the value of the ModuleCode parameter is cloudSiem. The value of this parameter consists of the log storage capacity for the threat analysis and response feature and the log data to add. Units: GB and GB-day.
   * 
   * @example
   * [1,100]
   */
  authLimitList?: string;
  /**
   * @remarks
   * The end time of the trial use.
   * 
   * @example
   * 1679760000000
   */
  gmtEnd?: number;
  /**
   * @remarks
   * The start time of the trial use.
   * 
   * @example
   * 1669824000000
   */
  gmtStart?: number;
  /**
   * @remarks
   * The code of the feature. Valid values:
   * 
   * *   **vulFix**: vulnerability fixing.
   * *   **cloudSiem**: threat analysis and response.
   * 
   * @example
   * vulFix
   */
  moduleCode?: string;
  /**
   * @remarks
   * The status of the trial use. Valid values:
   * 
   * *   **1**: The feature is in trial use.
   * *   **0**: The trial use ends.
   * 
   * @example
   * 1
   */
  status?: number;
  static names(): { [key: string]: string } {
    return {
      authLimit: 'AuthLimit',
      authLimitList: 'AuthLimitList',
      gmtEnd: 'GmtEnd',
      gmtStart: 'GmtStart',
      moduleCode: 'ModuleCode',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authLimit: 'number',
      authLimitList: 'string',
      gmtEnd: 'number',
      gmtStart: 'number',
      moduleCode: 'string',
      status: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleTrialAuthInfoResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the user is qualified for the trial use. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * false
   */
  canTry?: boolean;
  /**
   * @remarks
   * The code of the feature. Valid values:
   * 
   * *   **vulFix**: vulnerability fixing.
   * *   **cloudSiem**: threat analysis and response.
   * 
   * @example
   * vulFix
   */
  moduleCode?: string;
  /**
   * @remarks
   * The trial use record.
   */
  trialRecordList?: GetModuleTrialAuthInfoResponseBodyDataTrialRecordList[];
  static names(): { [key: string]: string } {
    return {
      canTry: 'CanTry',
      moduleCode: 'ModuleCode',
      trialRecordList: 'TrialRecordList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canTry: 'boolean',
      moduleCode: 'string',
      trialRecordList: { 'type': 'array', 'itemType': GetModuleTrialAuthInfoResponseBodyDataTrialRecordList },
    };
  }

  validate() {
    if(Array.isArray(this.trialRecordList)) {
      $dara.Model.validateArray(this.trialRecordList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetModuleTrialAuthInfoResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetModuleTrialAuthInfoResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetModuleTrialAuthInfoResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

