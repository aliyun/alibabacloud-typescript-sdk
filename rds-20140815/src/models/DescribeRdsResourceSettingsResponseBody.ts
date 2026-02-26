// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting extends $dara.Model {
  endDate?: string;
  isTop?: string;
  noticeBarContent?: string;
  poppedUpButtonText?: string;
  poppedUpButtonType?: string;
  poppedUpButtonUrl?: string;
  poppedUpContent?: string;
  resourceNiche?: string;
  startDate?: string;
  static names(): { [key: string]: string } {
    return {
      endDate: 'EndDate',
      isTop: 'IsTop',
      noticeBarContent: 'NoticeBarContent',
      poppedUpButtonText: 'PoppedUpButtonText',
      poppedUpButtonType: 'PoppedUpButtonType',
      poppedUpButtonUrl: 'PoppedUpButtonUrl',
      poppedUpContent: 'PoppedUpContent',
      resourceNiche: 'ResourceNiche',
      startDate: 'StartDate',
    };
  }

  static types(): { [key: string]: any } {
    return {
      endDate: 'string',
      isTop: 'string',
      noticeBarContent: 'string',
      poppedUpButtonText: 'string',
      poppedUpButtonType: 'string',
      poppedUpButtonUrl: 'string',
      poppedUpContent: 'string',
      resourceNiche: 'string',
      startDate: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings extends $dara.Model {
  rdsInstanceResourceSetting?: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting[];
  static names(): { [key: string]: string } {
    return {
      rdsInstanceResourceSetting: 'RdsInstanceResourceSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstanceResourceSetting: { 'type': 'array', 'itemType': DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettingsRdsInstanceResourceSetting },
    };
  }

  validate() {
    if(Array.isArray(this.rdsInstanceResourceSetting)) {
      $dara.Model.validateArray(this.rdsInstanceResourceSetting);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeRdsResourceSettingsResponseBody extends $dara.Model {
  rdsInstanceResourceSettings?: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 76364A52-E0AB-5CC8-xxxx-CF1DC482C092
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      rdsInstanceResourceSettings: 'RdsInstanceResourceSettings',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      rdsInstanceResourceSettings: DescribeRdsResourceSettingsResponseBodyRdsInstanceResourceSettings,
      requestId: 'string',
    };
  }

  validate() {
    if(this.rdsInstanceResourceSettings && typeof (this.rdsInstanceResourceSettings as any).validate === 'function') {
      (this.rdsInstanceResourceSettings as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

