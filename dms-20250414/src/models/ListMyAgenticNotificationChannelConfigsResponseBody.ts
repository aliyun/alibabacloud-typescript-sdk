// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMyAgenticNotificationChannelConfigsResponseBodyData extends $dara.Model {
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
   * The channel configuration information. Both keys and values are strings, which include bound identity information such as openId, mobile, or email. Sensitive values are always displayed as ****** and are not returned in plaintext.
   * 
   * @example
   * {"openId":"******","mobile":"******","email":"******"}
   */
  config?: { [key: string]: string };
  /**
   * @remarks
   * Indicates whether the notification channel is enabled. If the channel has never been configured, false is returned.
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

export class ListMyAgenticNotificationChannelConfigsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of notification channel configurations for the current user.
   */
  data?: ListMyAgenticNotificationChannelConfigsResponseBodyData[];
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
   * The maximum number of records per page used for this query.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. This parameter is empty if no more data is available.
   * 
   * @example
   * MjA
   */
  nextToken?: string;
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
   * Indicates whether the request is successful. Valid values: true and false.
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      errorCode: 'ErrorCode',
      errorMessage: 'ErrorMessage',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListMyAgenticNotificationChannelConfigsResponseBodyData },
      errorCode: 'string',
      errorMessage: 'string',
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

