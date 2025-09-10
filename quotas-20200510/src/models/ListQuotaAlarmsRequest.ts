// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaAlarmsRequestQuotaDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the dimension.
   * 
   * > 
   * 
   * *   The value range of N varies based on the number of dimensions that are supported by the related Alibaba Cloud service.
   * 
   * *   This parameter is required if you set the `ProductCode` parameter to `ecs`, `ecs-spec`, `actiontrail`, or `ess`.
   * 
   * @example
   * cn-hangzhou
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListQuotaAlarmsRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the alert.
   * 
   * @example
   * rules
   */
  alarmName?: string;
  /**
   * @remarks
   * The maximum number of records that you want to return for the query.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that marks the position from which you want to start the query.
   * 
   * > An empty value indicates that the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * >  To query the abbreviation of an Alibaba Cloud service name, call the [ListProducts](https://help.aliyun.com/document_detail/440554.html) operation and check the value of `ProductCode` in the response.
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * > 
   * 
   * *   To obtain the quota ID of a cloud service, call the [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html) operation and check the value of `QuotaActionCode` in the response.
   * 
   * *   If you specify this parameter, you must specify `ProductCode`.
   * 
   * @example
   * q_hvnoqv
   */
  quotaActionCode?: string;
  /**
   * @remarks
   * The quota dimensions.
   */
  quotaDimensions?: ListQuotaAlarmsRequestQuotaDimensions[];
  static names(): { [key: string]: string } {
    return {
      alarmName: 'AlarmName',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      productCode: 'ProductCode',
      quotaActionCode: 'QuotaActionCode',
      quotaDimensions: 'QuotaDimensions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alarmName: 'string',
      maxResults: 'number',
      nextToken: 'string',
      productCode: 'string',
      quotaActionCode: 'string',
      quotaDimensions: { 'type': 'array', 'itemType': ListQuotaAlarmsRequestQuotaDimensions },
    };
  }

  validate() {
    if(Array.isArray(this.quotaDimensions)) {
      $dara.Model.validateArray(this.quotaDimensions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

