// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListK8sConfigMapsResponseBodyResultConfigMapsData extends $dara.Model {
  /**
   * @remarks
   * The user-defined key that is stored in the ConfigMap.
   * 
   * @example
   * name
   */
  key?: string;
  /**
   * @remarks
   * The user-defined value that is stored in the ConfigMap.
   * 
   * @example
   * william
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

export class ListK8sConfigMapsResponseBodyResultConfigMapsRelatedApps extends $dara.Model {
  /**
   * @remarks
   * The ID of the application.
   * 
   * @example
   * 728cbdf2-da10-49b8-b69c-9168a********
   */
  appId?: string;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * my-app
   */
  appName?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      appName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsResponseBodyResultConfigMaps extends $dara.Model {
  /**
   * @remarks
   * The ID of the Kubernetes cluster. You can obtain the cluster ID by calling the GetK8sCluster operation. For more information, see [GetK8sCluster](https://help.aliyun.com/document_detail/181437.html).
   * 
   * @example
   * d73918f4-3b08-4c17-bb07-eaf8********
   */
  clusterId?: string;
  /**
   * @remarks
   * The name of the cluster.
   * 
   * @example
   * my-cluster
   */
  clusterName?: string;
  /**
   * @remarks
   * The time when the ConfigMaps were created. The time follows the ISO 8601 standard in the yyyy-MM-ddThh:mm:ssZ format. The time is displayed in UTC.
   * 
   * @example
   * 2022-01-31T02:46:14Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The information about ConfigMaps.
   */
  data?: ListK8sConfigMapsResponseBodyResultConfigMapsData[];
  /**
   * @remarks
   * The name of the ConfigMap.
   * 
   * @example
   * my-config
   */
  name?: string;
  /**
   * @remarks
   * The namespace of the Kubernetes cluster.
   * 
   * @example
   * default
   */
  namespace?: string;
  /**
   * @remarks
   * The related applications.
   */
  relatedApps?: ListK8sConfigMapsResponseBodyResultConfigMapsRelatedApps[];
  static names(): { [key: string]: string } {
    return {
      clusterId: 'ClusterId',
      clusterName: 'ClusterName',
      creationTime: 'CreationTime',
      data: 'Data',
      name: 'Name',
      namespace: 'Namespace',
      relatedApps: 'RelatedApps',
    };
  }

  static types(): { [key: string]: any } {
    return {
      clusterId: 'string',
      clusterName: 'string',
      creationTime: 'string',
      data: { 'type': 'array', 'itemType': ListK8sConfigMapsResponseBodyResultConfigMapsData },
      name: 'string',
      namespace: 'string',
      relatedApps: { 'type': 'array', 'itemType': ListK8sConfigMapsResponseBodyResultConfigMapsRelatedApps },
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    if(Array.isArray(this.relatedApps)) {
      $dara.Model.validateArray(this.relatedApps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsResponseBodyResult extends $dara.Model {
  /**
   * @remarks
   * The information about ConfigMaps.
   */
  configMaps?: ListK8sConfigMapsResponseBodyResultConfigMaps[];
  /**
   * @remarks
   * The total number of entries that are returned.
   * 
   * @example
   * 6
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      configMaps: 'ConfigMaps',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configMaps: { 'type': 'array', 'itemType': ListK8sConfigMapsResponseBodyResultConfigMaps },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.configMaps)) {
      $dara.Model.validateArray(this.configMaps);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListK8sConfigMapsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The HTTP status code.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The additional information that is returned.
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * D16979DC-4D42-****************
   */
  requestId?: string;
  /**
   * @remarks
   * The query results that are returned.
   */
  result?: ListK8sConfigMapsResponseBodyResult;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      message: 'Message',
      requestId: 'RequestId',
      result: 'Result',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      message: 'string',
      requestId: 'string',
      result: ListK8sConfigMapsResponseBodyResult,
    };
  }

  validate() {
    if(this.result && typeof (this.result as any).validate === 'function') {
      (this.result as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

