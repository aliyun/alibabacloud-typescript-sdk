// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAlertRulesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * type
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * prod
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

export class GetAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The unique IDs of alert rules.
   * 
   * *   If you do not specify this parameter, the API operation does not filter alert rules based on their IDs.
   * *   If you specify this parameter, the API operation returns only the information of the specified alert rules. Other filter conditions also take effect.
   * 
   * > When you call the GetAlertRules operation, you can specify other request parameters to obtain the AlertIds parameter from the response. Then, you can specify the AlertIds parameter to query the specified alert rules.
   * 
   * @example
   * ["12345"]
   */
  alertIds?: string;
  /**
   * @remarks
   * The names of alert rules. When you create alert rules of the new version, you cannot specify duplicate names. However, existing alert rules may have duplicate names. Therefore, the **AlertName** parameter does not uniquely identify an alert rule.
   * 
   * *   If you do not specify this parameter, the API operation does not filter alert rules based on their names.
   * *   If you specify this parameter, the API operation returns only the information of the specified alert rules. Other filter conditions also take effect.
   * 
   * @example
   * ["test"]
   */
  alertNames?: string;
  /**
   * @remarks
   * The status of the alert rule. Valid values:
   * 
   * *   RUNNING
   * *   STOPPED
   * *   PAUSED
   * 
   * >  The PAUSED state indicates an abnormal and paused alert rule. This may result from excessively large threshold values or deleted associated clusters.
   * 
   * @example
   * RUNNING
   */
  alertStatus?: string;
  /**
   * @remarks
   * The type of the alert rule. This parameter is required for the new version of Alert Management. Valid values:
   * 
   * *   APPLICATION_MONITORING_ALERT_RULE: alert rule for Application Monitoring
   * *   BROWSER_MONITORING_ALERT_RULE: alert rule for Browser Monitoring
   * *   PROMETHEUS_MONITORING_ALERT_RULE: alert rule for Managed Service for Prometheus
   * 
   * @example
   * APPLICATION_MONITORING_ALERT_RULE
   */
  alertType?: string;
  bizRegionId?: string;
  /**
   * @remarks
   * The ID of the monitored cluster.
   * 
   * @example
   * ceba9b9ea5b924dd0b6726d2de6******
   */
  clusterId?: string;
  /**
   * @remarks
   * The number of the page to return.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * You do not need to configure this parameter.
   * 
   * @example
   * null
   */
  productCode?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The number of alert rules to return on each page.
   * 
   * This parameter is required.
   * 
   * @example
   * 20
   */
  size?: number;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: GetAlertRulesRequestTags[];
  static names(): { [key: string]: string } {
    return {
      alertIds: 'AlertIds',
      alertNames: 'AlertNames',
      alertStatus: 'AlertStatus',
      alertType: 'AlertType',
      bizRegionId: 'BizRegionId',
      clusterId: 'ClusterId',
      page: 'Page',
      productCode: 'ProductCode',
      regionId: 'RegionId',
      size: 'Size',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertIds: 'string',
      alertNames: 'string',
      alertStatus: 'string',
      alertType: 'string',
      bizRegionId: 'string',
      clusterId: 'string',
      page: 'number',
      productCode: 'string',
      regionId: 'string',
      size: 'number',
      tags: { 'type': 'array', 'itemType': GetAlertRulesRequestTags },
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

