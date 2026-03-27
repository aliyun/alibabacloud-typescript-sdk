// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusViewRequestPrometheusInstances extends $dara.Model {
  /**
   * @remarks
   * Instance ID.
   * 
   * @example
   * arms-1d581fac20a462dcde743d9628
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * User ID.
   * 
   * @example
   * 167271234567890
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      prometheusInstanceId: 'prometheusInstanceId',
      regionId: 'regionId',
      userId: 'userId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      prometheusInstanceId: 'string',
      regionId: 'string',
      userId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreatePrometheusViewRequestTags extends $dara.Model {
  /**
   * @remarks
   * Tag key.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * Tag value.
   * 
   * @example
   * test-value
   */
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'key',
      value: 'value',
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

export class CreatePrometheusViewRequest extends $dara.Model {
  /**
   * @remarks
   * Not enabled yet
   * 
   * @example
   * {
   *   "SourceIp": [
   *     "192.168.1.0/24",
   *     "172.168.2.22"
   *   ],
   *   "SourceVpc": [
   *     "vpc-xx1",
   *     "vpc-xx2"
   *   ]
   * }
   */
  authFreeReadPolicy?: string;
  /**
   * @remarks
   * Whether to support password-free read
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Whether to support authToken
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * List of Prometheus instances.
   * 
   * This parameter is required.
   */
  prometheusInstances?: CreatePrometheusViewRequestPrometheusInstances[];
  /**
   * @remarks
   * Prometheus view name.
   * 
   * This parameter is required.
   * 
   * @example
   * test-prom-view-name
   */
  prometheusViewName?: string;
  /**
   * @remarks
   * Resource group ID.
   * 
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Not enabled yet.
   * 
   * @example
   * null
   */
  status?: string;
  /**
   * @remarks
   * The operation to be performed.
   */
  tags?: CreatePrometheusViewRequestTags[];
  /**
   * @remarks
   * - V1: Old version
   * - V2: New version
   * 
   * This parameter is required.
   * 
   * @example
   * V2
   */
  version?: string;
  /**
   * @remarks
   * Default value: default-cms-{userId}-{regionId}
   * 
   * @example
   * cms-monitor-test-aysls-pub-cn-zhangjiakou-spe-monitor
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      authFreeReadPolicy: 'authFreeReadPolicy',
      enableAuthFreeRead: 'enableAuthFreeRead',
      enableAuthToken: 'enableAuthToken',
      prometheusInstances: 'prometheusInstances',
      prometheusViewName: 'prometheusViewName',
      resourceGroupId: 'resourceGroupId',
      status: 'status',
      tags: 'tags',
      version: 'version',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      authFreeReadPolicy: 'string',
      enableAuthFreeRead: 'boolean',
      enableAuthToken: 'boolean',
      prometheusInstances: { 'type': 'array', 'itemType': CreatePrometheusViewRequestPrometheusInstances },
      prometheusViewName: 'string',
      resourceGroupId: 'string',
      status: 'string',
      tags: { 'type': 'array', 'itemType': CreatePrometheusViewRequestTags },
      version: 'string',
      workspace: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.prometheusInstances)) {
      $dara.Model.validateArray(this.prometheusInstances);
    }
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

