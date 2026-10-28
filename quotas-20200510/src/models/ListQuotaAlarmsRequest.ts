// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListQuotaAlarmsRequestQuotaDimensions extends $dara.Model {
  /**
   * @remarks
   * The key of the quota dimension.
   * 
   * > - The number of key-value pairs that you can specify for the quota dimensions varies based on the Alibaba Cloud service.
   * >
   * > - If you set `ProductCode` to `ecs`, `ecs-spec`, `actiontrail`, or `ess`, you must specify both the key and value for the quota dimension.
   * 
   * @example
   * regionId
   */
  key?: string;
  /**
   * @remarks
   * The value of the quota dimension.
   * 
   * > - The number of key-value pairs that you can specify for the quota dimensions varies based on the Alibaba Cloud service.
   * >
   * > - If you set `ProductCode` to `ecs`, `ecs-spec`, `actiontrail`, or `ess`, you must specify both the key and value for the quota dimension.
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
   * The name of the quota usage alert.
   * 
   * @example
   * q_hvnoqv alarm
   */
  alarmName?: string;
  /**
   * @remarks
   * The maximum number of records to return.
   * 
   * Valid values: 1 to 200. Default value: 30.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that specifies the start point of the query.
   * 
   * > If you do not specify this parameter, the query starts from the beginning.
   * 
   * @example
   * 1
   */
  nextToken?: string;
  /**
   * @remarks
   * The abbreviation of the Alibaba Cloud service name.
   * 
   * > To obtain the abbreviation of an Alibaba Cloud service name, see the `ProductCode` parameter in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * 
   * @example
   * ecs
   */
  productCode?: string;
  /**
   * @remarks
   * The quota ID.
   * 
   * > - To obtain the quota ID of an Alibaba Cloud service, see the `QuotaActionCode` parameter in [ListProductQuotas](https://help.aliyun.com/document_detail/440554.html).
   * >
   * > - If you specify this parameter, you must also specify `ProductCode`.
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

