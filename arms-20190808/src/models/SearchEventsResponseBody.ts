// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchEventsResponseBodyPageBeanEvent extends $dara.Model {
  /**
   * @remarks
   * The ID of the alert rule that is associated with the event.
   * 
   * @example
   * 123
   */
  alertId?: number;
  /**
   * @remarks
   * The name of the alert rule that is associated with the event.
   * 
   * @example
   * alertName
   */
  alertName?: string;
  /**
   * @remarks
   * The condition of the alert rule.
   * 
   * @example
   * {\\"operator\\":\\"&\\",\\"rules\\":[{\\"aggregates\\":\\"AVG\\",\\"alias\\":\\"JVM_线程总数\\",\\"measure\\":\\"appstat.jvm.ThreadCount\\",\\"nValue\\":1,\\"operator\\":\\"HOH_DOWN\\",\\"value\\":50.0}]}
   */
  alertRule?: string;
  /**
   * @remarks
   * The type of the alert rule. This parameter is not returned. Valid values:
   * 
   * *   `1`: custom alert rules to monitor drill-down data sets
   * *   `3`: custom alert rules to monitor tiled data sets
   * *   `4`: alert rules to monitor the frontend, including the default frontend alert rules
   * *   `5`: alert rules to monitor applications, including the default application alert rules
   * *   `6`: the default frontend alert rules
   * *   `7`: the default application alert rules
   * *   `8`: Tracing Analysis alert rules
   * *   `101`: Prometheus alert rules
   * 
   * @example
   * 4
   */
  alertType?: number;
  /**
   * @remarks
   * The severity of the event.
   * 
   * @example
   * 1
   */
  eventLevel?: string;
  /**
   * @remarks
   * The timestamp when the event occurred.
   * 
   * @example
   * 1595569020000
   */
  eventTime?: number;
  /**
   * @remarks
   * The ID of the event record.
   * 
   * @example
   * 123
   */
  id?: number;
  /**
   * @remarks
   * The list of event URLs.
   */
  links?: string[];
  /**
   * @remarks
   * The event content. The parameter value is a JSON string. Each key indicates a dimension and each value indicates the alert content in the dimension.
   * 
   * @example
   * unknow紧急报警\\nip：172.27.XX.XX\\n应用名 = test\\nRegion = cn-shenzhen\\n异常信息 = {\\"timestamp\\"：\\"1615447972235\\"}
   */
  message?: string;
  static names(): { [key: string]: string } {
    return {
      alertId: 'AlertId',
      alertName: 'AlertName',
      alertRule: 'AlertRule',
      alertType: 'AlertType',
      eventLevel: 'EventLevel',
      eventTime: 'EventTime',
      id: 'Id',
      links: 'Links',
      message: 'Message',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertId: 'number',
      alertName: 'string',
      alertRule: 'string',
      alertType: 'number',
      eventLevel: 'string',
      eventTime: 'number',
      id: 'number',
      links: { 'type': 'array', 'itemType': 'string' },
      message: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.links)) {
      $dara.Model.validateArray(this.links);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponseBodyPageBean extends $dara.Model {
  /**
   * @remarks
   * The information about the alert events.
   */
  event?: SearchEventsResponseBodyPageBeanEvent[];
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      event: 'Event',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      event: { 'type': 'array', 'itemType': SearchEventsResponseBodyPageBeanEvent },
      pageNumber: 'number',
      pageSize: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.event)) {
      $dara.Model.validateArray(this.event);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class SearchEventsResponseBody extends $dara.Model {
  /**
   * @remarks
   * Specifies whether the alert event is triggered. If you do not set this parameter, all alert events are queried. Valid values:
   * 
   * *   `1`: The event is triggered.
   * *   `0`: The event is not triggered.
   * 
   * @example
   * 0
   */
  isTrigger?: number;
  /**
   * @remarks
   * The struct returned.
   */
  pageBean?: SearchEventsResponseBodyPageBean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 32940175-181B-4B93-966E-4BB69176****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      isTrigger: 'IsTrigger',
      pageBean: 'PageBean',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isTrigger: 'number',
      pageBean: SearchEventsResponseBodyPageBean,
      requestId: 'string',
    };
  }

  validate() {
    if(this.pageBean && typeof (this.pageBean as any).validate === 'function') {
      (this.pageBean as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

