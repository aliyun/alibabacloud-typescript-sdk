// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateMyAgenticNotificationChannelConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The notification channel type. Valid values: FEISHU (Lark).
   * 
   * @example
   * FEISHU
   */
  channel?: string;
  /**
   * @remarks
   * The channel configuration information. Both keys and values are strings, including the bound identity information such as openId, mobile, or email. Sensitive values are always displayed as ******, and plaintext is not returned.
   * 
   * @example
   * {"openId":"******","mobile":"******","email":"******"}
   */
  config?: { [key: string]: string };
  /**
   * @remarks
   * Indicates whether the notification channel is enabled. Returns false if the channel has never been configured.
   */
  enabled?: boolean;
  static names(): { [key: string]: string } {
    return {
      channel: 'Channel',
      config: 'Config',
      enabled: 'Enabled',
    };
  }

  static types(): { [key: string]: any } {
    return {
      channel: 'string',
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      enabled: 'boolean',
    };
  }

  validate() {
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateMyAgenticNotificationChannelConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The updated notification channel configuration.
   */
  data?: UpdateMyAgenticNotificationChannelConfigResponseBodyData;
  /**
   * @remarks
   * The error code returned when the request fails.
   * 
   * @example
   * INVALID_PARAMETER
   */
  errorCode?: string;
  /**
   * @remarks
   * The error message returned when the request fails.
   * 
   * @example
   * channel must be FEISHU
   */
  errorMessage?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0C1CB646-1DE4-4AD0-B4A4-7D47DD52E931
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request is successful. Valid values: true: The request is successful. false: The request fails.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: UpdateMyAgenticNotificationChannelConfigResponseBodyData,
      errorCode: 'string',
      errorMessage: 'string',
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

