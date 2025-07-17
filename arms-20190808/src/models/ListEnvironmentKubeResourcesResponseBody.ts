// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListEnvironmentKubeResourcesResponseBodyDataMetadata extends $dara.Model {
  /**
   * @remarks
   * The annotations.
   */
  annotations?: { [key: string]: string };
  /**
   * @remarks
   * The tags.
   */
  labels?: { [key: string]: string };
  /**
   * @remarks
   * The resource name.
   * 
   * @example
   * arms-prometheus-ack-arms-prometheus-c577b6cc8-mvdwd
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   * 
   * @example
   * arms-prom
   */
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      annotations: 'Annotations',
      labels: 'Labels',
      name: 'Name',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      annotations: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'string' },
      name: 'string',
      namespace: 'string',
    };
  }

  validate() {
    if(this.annotations) {
      $dara.Model.validateMap(this.annotations);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentKubeResourcesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The version number of the API.
   * 
   * @example
   * v1
   */
  apiVersion?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * @example
   * Pod
   */
  kind?: string;
  /**
   * @remarks
   * The metadata.
   */
  metadata?: ListEnvironmentKubeResourcesResponseBodyDataMetadata;
  /**
   * @remarks
   * The resource specifications.
   * 
   * @example
   * {
   *         "dnsPolicy": "ClusterFirst",
   *         "nodeName": "cn-hangzhou.172.16.0.60",
   *         "terminationGracePeriodSeconds": 30,
   *         "enableServiceLinks": true,
   *         "serviceAccountName": "arms-prom-operator",
   *         "volumes": [
   *           {
   *             "name": "certs",
   *             "secret": {
   *               "secretName": "arms-prometheus-ack-arms-prometheus-cert",
   *               "defaultMode": 420
   *             }
   *           }
   */
  spec?: any;
  /**
   * @remarks
   * The status of the resource.
   * 
   * @example
   * run
   */
  status?: any;
  static names(): { [key: string]: string } {
    return {
      apiVersion: 'ApiVersion',
      kind: 'Kind',
      metadata: 'Metadata',
      spec: 'Spec',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiVersion: 'string',
      kind: 'string',
      metadata: ListEnvironmentKubeResourcesResponseBodyDataMetadata,
      spec: 'any',
      status: 'any',
    };
  }

  validate() {
    if(this.metadata && typeof (this.metadata as any).validate === 'function') {
      (this.metadata as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListEnvironmentKubeResourcesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The status code. The status code 200 indicates that the request was successful. Other status codes indicate that the request failed.
   * 
   * @example
   * 200
   */
  code?: number;
  /**
   * @remarks
   * The returned struct.
   */
  data?: ListEnvironmentKubeResourcesResponseBodyData[];
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * message
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * C21AB7CF-B7AF-410F-BD61-82D1567F****
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   `true`
   * *   `false`
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'Code',
      data: 'Data',
      message: 'Message',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'number',
      data: { 'type': 'array', 'itemType': ListEnvironmentKubeResourcesResponseBodyData },
      message: 'string',
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

