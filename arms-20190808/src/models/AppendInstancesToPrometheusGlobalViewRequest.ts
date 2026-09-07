// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AppendInstancesToPrometheusGlobalViewRequest extends $dara.Model {
  /**
   * @remarks
   * The list of global aggregation instances. The value is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * [         {             "sourceName": "数据源名称- ArmsPrometheus No.1",             "sourceType":"AlibabaPrometheus",             "userId":"UserID",             "clusterId":"ClusterId",         },         {             "sourceName": "数据源名称 - MetrcStore No.2",             "sourceType":"MetricStore",             "dataSource":"MetricStore的 remote read 地址",             "extras":{                 "username":"BasicAuthUsername",                 "password":"BasicAuthPassword"             }         },         {             "sourceName": "Custom ",             "sourceType":"CustomPrometheus",             "dataSource":"自建Prometheus数据源 remoteread地址",             "extras":{                 "username":"BasicAuthUsername",                 "password":"BasicAuthPassword"             }         },         {           	"sourceName": "Other one ",             "sourceType":"Others",             "dataSource":"其他数据源如Tencent remoteread地址",             "headers":{                 "AnyHeaderToFill":"需要填充的Headers"             },             "extras":{                 "username":"BasicAuthUsername",                 "password":"BasicAuthPassword"             }         }   // ....... more addre ]
   */
  clusters?: string;
  /**
   * @remarks
   * The ID of the global aggregation instance.
   * 
   * This parameter is required.
   * 
   * @example
   * global-v2-cn-1670100631025794-6gjc0qgb
   */
  globalViewClusterId?: string;
  /**
   * @remarks
   * The name of the global aggregation instance.
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
  static names(): { [key: string]: string } {
    return {
      clusters: 'Clusters',
      globalViewClusterId: 'GlobalViewClusterId',
      groupName: 'GroupName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusters: 'string',
      globalViewClusterId: 'string',
      groupName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

