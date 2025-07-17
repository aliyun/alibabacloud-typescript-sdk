// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchAlertRulesRequestTags extends $dara.Model {
  /**
   * @remarks
   * The key of the tag. The following system preset fields are provided:
   * 
   * *   traceId: the ID of the trace.
   * *   serverApp: the name of the server application.
   * *   clientApp: the name of the client application.
   * *   service: the name of the operation.
   * *   rpc: the type of the call.
   * *   msOfSpan: the duration exceeds a specific value.
   * *   clientIp: the IP address of the client.
   * *   serverIp: the IP address of the server.
   * *   isError: specifies whether the call is abnormal.
   * *   hasTprof: contains only thread profiling.
   * 
   * @example
   * TestKey
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * TestValue
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

export class SearchAlertRulesRequest extends $dara.Model {
  /**
   * @remarks
   * The id of AlertRule.
   * 
   * @example
   * 12345
   */
  alertRuleId?: string;
  /**
   * @remarks
   * The type of the application that is associated with the alert rule. Valid values:
   * 
   * *   `TRACE`: application
   * *   `RETCODE`: browser
   * 
   * @example
   * TRACE
   */
  appType?: string;
  /**
   * @remarks
   * The page number of the page to return. Default value: `1`.
   * 
   * @example
   * 1
   */
  currentPage?: number;
  /**
   * @remarks
   * The number of entries to return per page. Default value: `10`.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The process identifier (PID) of the application that is associated with the alert rule. For more information about how to obtain the PID, see [Obtain the PID of an application](https://help.aliyun.com/document_detail/186100.html?spm=a2c4g.11186623.6.792.1b50654cqcDPyk#title-imy-7gj-qhr).
   * 
   * @example
   * atc889zkcf@d8deedfa9bf****
   */
  pid?: string;
  /**
   * @remarks
   * The region ID of the alert data. For more information about the mappings between **RegionId** and **SystemRegionId**, see the detailed description below the table.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the resource group. You can obtain the resource group ID in the **Resource Management** console.
   * 
   * @example
   * rg-acfmxyexli2****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The region ID of the alert rule. For more information about the mappings between **RegionId** and **SystemRegionId**, see the detailed description below the table.
   * 
   * @example
   * cn-hangzhou
   */
  systemRegionId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: SearchAlertRulesRequestTags[];
  /**
   * @remarks
   * The alert rule name.
   * 
   * @example
   * AlertRuleTitle
   */
  title?: string;
  /**
   * @remarks
   * The alert rule type. Valid values:
   * 
   * *   `1`: custom alert rules that are used to monitor drill-down data sets
   * *   `3`: custom alert rules that are used to monitor tiled data sets
   * *   `4`: alert rules that are used to monitor the browser, including the default frontend alert rules
   * *   `5`: alert rules that are used to monitor applications, including the default application alert rules
   * *   `6`: the default browser alert rules
   * *   `7`: the default application alert rules
   * *   `8`: Tracing Analysis alert rules
   * *   `101`: Prometheus alert rules
   * 
   * @example
   * 4
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      alertRuleId: 'AlertRuleId',
      appType: 'AppType',
      currentPage: 'CurrentPage',
      pageSize: 'PageSize',
      pid: 'Pid',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      systemRegionId: 'SystemRegionId',
      tags: 'Tags',
      title: 'Title',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertRuleId: 'string',
      appType: 'string',
      currentPage: 'number',
      pageSize: 'number',
      pid: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      systemRegionId: 'string',
      tags: { 'type': 'array', 'itemType': SearchAlertRulesRequestTags },
      title: 'string',
      type: 'string',
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

