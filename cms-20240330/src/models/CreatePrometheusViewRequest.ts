// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePrometheusViewRequestPrometheusInstances extends $dara.Model {
  /**
   * @example
   * arms-1d581fac20a462dcde743d9628
   */
  prometheusInstanceId?: string;
  /**
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
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
   * @example
   * test-key
   */
  key?: string;
  /**
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
   * @example
   * null
   */
  authFreeReadPolicy?: string;
  /**
   * @example
   * true
   */
  enableAuthFreeRead?: boolean;
  /**
   * @example
   * true
   */
  enableAuthToken?: boolean;
  /**
   * @remarks
   * This parameter is required.
   */
  prometheusInstances?: CreatePrometheusViewRequestPrometheusInstances[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * test-prom-view-name
   */
  prometheusViewName?: string;
  /**
   * @example
   * rg-acfm3gn5i6bigbi
   */
  resourceGroupId?: string;
  /**
   * @example
   * null
   */
  status?: string;
  tags?: CreatePrometheusViewRequestTags[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * V2
   */
  version?: string;
  /**
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

