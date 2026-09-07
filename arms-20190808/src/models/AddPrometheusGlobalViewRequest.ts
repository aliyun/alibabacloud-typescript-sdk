// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddPrometheusGlobalViewRequestTag extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * http.status_code
   */
  key?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * 200
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

export class AddPrometheusGlobalViewRequest extends $dara.Model {
  /**
   * @remarks
   * The list of aggregation instances. The value is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * [         {             "sourceName": "数据源名称- ArmsPrometheus No.1",             "sourceType":"AlibabaPrometheus",             "userId":"UserID",             "clusterId":"ClusterId",         },         {             "sourceName": "数据源名称 - MetrcStore No.2",             "sourceType":"MetricStore",             "dataSource":"MetricStore的 remote read 地址",             "extras":{                 "username":"BasicAuthUsername",                 "password":"BasicAuthPassword"             }         },         {             "sourceName": "Custom ",             "sourceType":"CustomPrometheus",             "dataSource":"自建Prometheus数据源 remoteread地址",             "extras":{                 "username":"BasicAuthUsername",                 "password":"BasicAuthPassword"             }         },         {           	"sourceName": "Other one ",             "sourceType":"Others",             "dataSource":"其他数据源如Tencent remoteread地址",             "headers":{                 "AnyHeaderToFill":"需要填充的Headers"             },             "extras":{                 "username":"BasicAuthUsername",                 "password":"BasicAuthPassword"             }         }   // ....... more addre ]
   */
  clusters?: string;
  /**
   * @remarks
   * The name of the aggregation instance.
   * 
   * This parameter is required.
   * 
   * @example
   * zyGlobalView
   */
  groupName?: string;
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
   * The resource group ID.
   * 
   * @example
   * rg-aek2eq4pecazwfy
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tag?: AddPrometheusGlobalViewRequestTag[];
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      groupName: 'GroupName',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      tag: 'Tag',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: 'string',
      groupName: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      tag: { 'type': 'array', 'itemType': AddPrometheusGlobalViewRequestTag },
    };
  }

  validate() {
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

