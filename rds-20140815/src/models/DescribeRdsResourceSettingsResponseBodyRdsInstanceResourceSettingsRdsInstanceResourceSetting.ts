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

