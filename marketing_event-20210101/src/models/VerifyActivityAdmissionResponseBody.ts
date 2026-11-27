// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class VerifyActivityAdmissionResponseBodyData extends $dara.Model {
  activityId?: number;
  activityName?: string;
  address?: string;
  admissionDate?: string;
  allowedDates?: string[];
  /**
   * @example
   * 定邀-现场嘉宾
   */
  channelName?: string;
  /**
   * @example
   * ["VIP", "思辨场"]
   */
  customerLabels?: string[];
  decision?: string;
  endTime?: string;
  maskedIdCardNo?: string;
  name?: string;
  registrationStatus?: number;
  signedIn?: boolean;
  signinTime?: string;
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      activityId: 'ActivityId',
      activityName: 'ActivityName',
      address: 'Address',
      admissionDate: 'AdmissionDate',
      allowedDates: 'AllowedDates',
      channelName: 'ChannelName',
      customerLabels: 'CustomerLabels',
      decision: 'Decision',
      endTime: 'EndTime',
      maskedIdCardNo: 'MaskedIdCardNo',
      name: 'Name',
      registrationStatus: 'RegistrationStatus',
      signedIn: 'SignedIn',
      signinTime: 'SigninTime',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      activityId: 'number',
      activityName: 'string',
      address: 'string',
      admissionDate: 'string',
      allowedDates: { 'type': 'array', 'itemType': 'string' },
      channelName: 'string',
      customerLabels: { 'type': 'array', 'itemType': 'string' },
      decision: 'string',
      endTime: 'string',
      maskedIdCardNo: 'string',
      name: 'string',
      registrationStatus: 'number',
      signedIn: 'boolean',
      signinTime: 'string',
      startTime: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.allowedDates)) {
      $dara.Model.validateArray(this.allowedDates);
    }
    if(Array.isArray(this.customerLabels)) {
      $dara.Model.validateArray(this.customerLabels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class VerifyActivityAdmissionResponseBody extends $dara.Model {
  code?: string;
  data?: VerifyActivityAdmissionResponseBodyData;
  message?: string;
  requestId?: string;
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: VerifyActivityAdmissionResponseBodyData,
      message: 'string',
      requestId: 'string',
      success: 'boolean',
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

