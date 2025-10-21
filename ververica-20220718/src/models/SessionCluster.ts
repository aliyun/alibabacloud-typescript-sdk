// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { BasicResourceSetting } from "./BasicResourceSetting";
import { Logging } from "./Logging";
import { SessionClusterStatus } from "./SessionClusterStatus";


export class SessionCluster extends $dara.Model {
  basicResourceSetting?: BasicResourceSetting;
  createdAt?: number;
  /**
   * @example
   * 27846363877456****
   */
  creator?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  creatorName?: string;
  /**
   * @example
   * default-queue
   */
  deploymentTargetName?: string;
  /**
   * @example
   * vvr-6.0.7-flink-1.15
   */
  engineVersion?: string;
  /**
   * @example
   * {"taskmanager.numberOfTaskSlots":"1"}
   */
  flinkConf?: { [key: string]: any };
  labels?: { [key: string]: any };
  logging?: Logging;
  modifiedAt?: number;
  /**
   * @example
   * 27846363877456****
   */
  modifier?: string;
  /**
   * @example
   * ****@streamcompute.onaliyun.com
   */
  modifierName?: string;
  /**
   * @example
   * test-sessionCluster
   */
  name?: string;
  /**
   * @example
   * default-namespace
   */
  namespace?: string;
  /**
   * @example
   * 1f68a52c-1760-43c6-97fb-afe0674b****
   */
  sessionClusterId?: string;
  status?: SessionClusterStatus;
  /**
   * @example
   * edcef******b4f
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      basicResourceSetting: 'basicResourceSetting',
      createdAt: 'createdAt',
      creator: 'creator',
      creatorName: 'creatorName',
      deploymentTargetName: 'deploymentTargetName',
      engineVersion: 'engineVersion',
      flinkConf: 'flinkConf',
      labels: 'labels',
      logging: 'logging',
      modifiedAt: 'modifiedAt',
      modifier: 'modifier',
      modifierName: 'modifierName',
      name: 'name',
      namespace: 'namespace',
      sessionClusterId: 'sessionClusterId',
      status: 'status',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basicResourceSetting: BasicResourceSetting,
      createdAt: 'number',
      creator: 'string',
      creatorName: 'string',
      deploymentTargetName: 'string',
      engineVersion: 'string',
      flinkConf: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      labels: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      logging: Logging,
      modifiedAt: 'number',
      modifier: 'string',
      modifierName: 'string',
      name: 'string',
      namespace: 'string',
      sessionClusterId: 'string',
      status: SessionClusterStatus,
      workspace: 'string',
    };
  }

  validate() {
    if(this.basicResourceSetting && typeof (this.basicResourceSetting as any).validate === 'function') {
      (this.basicResourceSetting as any).validate();
    }
    if(this.flinkConf) {
      $dara.Model.validateMap(this.flinkConf);
    }
    if(this.labels) {
      $dara.Model.validateMap(this.labels);
    }
    if(this.logging && typeof (this.logging as any).validate === 'function') {
      (this.logging as any).validate();
    }
    if(this.status && typeof (this.status as any).validate === 'function') {
      (this.status as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

