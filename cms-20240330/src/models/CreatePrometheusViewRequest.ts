// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusViewRequestPrometheusInstances extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * arms-1d581fac20a462dcde743d9628
   */
  prometheusInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * The user ID.
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
   * The key of the tag.
   * 
   * @example
   * test-key
   */
  key?: string;
  /**
   * @remarks
   * The value of the tag.
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
   * This parameter is not in use.
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
   * Specifies whether to enable password-free read access.
   * 
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @remarks
   * Specifies whether to enable an authentication token.
   * 
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * The list of Prometheus instances.
   * 
   * This parameter is required.
   */
  prometheusInstances?: CreatePrometheusViewRequestPrometheusInstances[];
  /**
   * @remarks
   * The name of the Prometheus view.
   * 
   * This parameter is required.
   * 
   * @example
   * test-prom-view-name
   */
  prometheusViewName?: string;
  /**
   * @remarks
   * The resource group ID.
   * 
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * This parameter is not in use.
   * 
   * @example
   * null
   */
  status?: string;
  /**
   * @remarks
   * Specifies the operation to execute.
   */
  tags?: CreatePrometheusViewRequestTags[];
  /**
   * @remarks
   * - V1: The old version.
   * 
   * - V2: The new version.
   * 
   * This parameter is required.
   * 
   * @example
   * V2
   */
  version?: string;
  /**
   * @remarks
   * The default value is default-cms-{userId}-{regionId}.
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

