// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityAlertOfAllRuleScopeByWatchIdResponseBodyQualityAlertInfoAlertDutyList extends $dara.Model {
  /**
   * @remarks
   * The alert duty roster ID.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The alert duty roster name.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityAlertOfAllRuleScopeByWatchIdResponseBodyQualityAlertInfoAlertUserList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 30012011
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityAlertOfAllRuleScopeByWatchIdResponseBodyQualityAlertInfo extends $dara.Model {
  /**
   * @remarks
   * The duty roster alert channels.
   */
  alertDutyChannelList?: string[];
  /**
   * @remarks
   * The duty roster alert list.
   */
  alertDutyList?: GetQualityAlertOfAllRuleScopeByWatchIdResponseBodyQualityAlertInfoAlertDutyList[];
  /**
   * @remarks
   * The quality owner alert channels.
   */
  alertQualityOwnerChannelList?: string[];
  /**
   * @remarks
   * The user alert channels.
   */
  alertUserChannelList?: string[];
  /**
   * @remarks
   * The user alert list.
   */
  alertUserList?: GetQualityAlertOfAllRuleScopeByWatchIdResponseBodyQualityAlertInfoAlertUserList[];
  /**
   * @remarks
   * Indicates whether alerting is enabled for the quality owner.
   */
  enableAlertQualityOwner?: boolean;
  /**
   * @remarks
   * The monitored object ID.
   * 
   * @example
   * 1
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      alertDutyChannelList: 'AlertDutyChannelList',
      alertDutyList: 'AlertDutyList',
      alertQualityOwnerChannelList: 'AlertQualityOwnerChannelList',
      alertUserChannelList: 'AlertUserChannelList',
      alertUserList: 'AlertUserList',
      enableAlertQualityOwner: 'EnableAlertQualityOwner',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDutyChannelList: { 'type': 'array', 'itemType': 'string' },
      alertDutyList: { 'type': 'array', 'itemType': GetQualityAlertOfAllRuleScopeByWatchIdResponseBodyQualityAlertInfoAlertDutyList },
      alertQualityOwnerChannelList: { 'type': 'array', 'itemType': 'string' },
      alertUserChannelList: { 'type': 'array', 'itemType': 'string' },
      alertUserList: { 'type': 'array', 'itemType': GetQualityAlertOfAllRuleScopeByWatchIdResponseBodyQualityAlertInfoAlertUserList },
      enableAlertQualityOwner: 'boolean',
      watchId: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.alertDutyChannelList)) {
      $dara.Model.validateArray(this.alertDutyChannelList);
    }
    if(Array.isArray(this.alertDutyList)) {
      $dara.Model.validateArray(this.alertDutyList);
    }
    if(Array.isArray(this.alertQualityOwnerChannelList)) {
      $dara.Model.validateArray(this.alertQualityOwnerChannelList);
    }
    if(Array.isArray(this.alertUserChannelList)) {
      $dara.Model.validateArray(this.alertUserChannelList);
    }
    if(Array.isArray(this.alertUserList)) {
      $dara.Model.validateArray(this.alertUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetQualityAlertOfAllRuleScopeByWatchIdResponseBody extends $dara.Model {
  /**
   * @remarks
   * The backend response code.
   * 
   * @example
   * OK
   */
  code?: string;
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The details of the backend exception.
   * 
   * @example
   * internal error
   */
  message?: string;
  /**
   * @remarks
   * The alert settings details.
   */
  qualityAlertInfo?: GetQualityAlertOfAllRuleScopeByWatchIdResponseBodyQualityAlertInfo;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 82E78D6B-AA8F-1FEF-8AA3-5C9DA2A79140
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      qualityAlertInfo: 'QualityAlertInfo',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      httpStatusCode: 'number',
      message: 'string',
      qualityAlertInfo: GetQualityAlertOfAllRuleScopeByWatchIdResponseBodyQualityAlertInfo,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.qualityAlertInfo && typeof (this.qualityAlertInfo as any).validate === 'function') {
      (this.qualityAlertInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

