// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetMaliciousFileWhitelistConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The number of assets on which the whitelist rule takes effect.
   * 
   * >  The value of this parameter is returned only if the value of TargetType is SELECTION_KEY.
   * 
   * @example
   * 0
   */
  count?: string;
  /**
   * @remarks
   * The name of the alert.
   * 
   * *   The value is fixed as ALL, which indicates all alert types.
   * 
   * @example
   * ALL
   */
  eventName?: string;
  /**
   * @remarks
   * The field that is used in the whitelist rule.
   * 
   * @example
   * fileMd5
   */
  field?: string;
  /**
   * @remarks
   * The value of the field that is used in the whitelist rule.
   * 
   * @example
   * b2cf9747ee49d8d9b105cf16e078cc16
   */
  fieldValue?: string;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 1671607025000
   */
  gmtCreate?: string;
  /**
   * @remarks
   * The modification time.
   * 
   * @example
   * 1674095396000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The ID of the whitelist rule.
   * 
   * @example
   * 1
   */
  id?: number;
  /**
   * @remarks
   * The logical operator that is used in the whitelist rule.
   * 
   * *   The value is fixed as strEqual, which indicates the equality operator (=).
   * 
   * @example
   * strEqual
   */
  operator?: string;
  /**
   * @remarks
   * The feature to which this operation belongs.
   * 
   * *   The value is fixed as agentless, which indicates the agentless detection feature.
   * 
   * @example
   * agentless
   */
  source?: string;
  /**
   * @remarks
   * The type of the assets on which the whitelist rule takes effect. Valid values:
   * 
   * *   ALL: all assets
   * *   SELECTION_KEY: selected assets
   * 
   * @example
   * ALL
   */
  targetType?: string;
  /**
   * @remarks
   * The assets on which the whitelist rule takes effect. Valid values:
   * 
   * *   ALL: all assets
   * *   Others: selected assets
   * 
   * @example
   * ALL
   */
  targetValue?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      eventName: 'EventName',
      field: 'Field',
      fieldValue: 'FieldValue',
      gmtCreate: 'GmtCreate',
      gmtModified: 'GmtModified',
      id: 'Id',
      operator: 'Operator',
      source: 'Source',
      targetType: 'TargetType',
      targetValue: 'TargetValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'string',
      eventName: 'string',
      field: 'string',
      fieldValue: 'string',
      gmtCreate: 'string',
      gmtModified: 'string',
      id: 'number',
      operator: 'string',
      source: 'string',
      targetType: 'string',
      targetValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetMaliciousFileWhitelistConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response code. The status code **200** indicates that the request was successful. Other status codes indicate that the request failed. You can identify the cause of the failure based on the status code.
   * 
   * @example
   * 200
   */
  code?: string;
  /**
   * @remarks
   * The response parameters.
   */
  data?: GetMaliciousFileWhitelistConfigResponseBodyData;
  /**
   * @remarks
   * The HTTP status code. The value 200 indicates that the request was successful.
   * 
   * @example
   * 200
   */
  httpStatusCode?: number;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * successful
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * F8B6F758-BCD4-597A-8A2C-DA5A552C****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **true**
   * *   **false**
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      httpStatusCode: 'HttpStatusCode',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      data: GetMaliciousFileWhitelistConfigResponseBodyData,
      httpStatusCode: 'number',
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

