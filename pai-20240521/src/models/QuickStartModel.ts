// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ModelVersion } from "./ModelVersion";


export class QuickStartModel extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
  /**
   * @example
   * 100
   */
  deploymentCount?: number;
  /**
   * @example
   * cv
   */
  domain?: string;
  extraInfo?: { [key: string]: any };
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtCreateTime?: string;
  /**
   * @example
   * 2021-01-21T17:12:35Z
   */
  gmtModifiedTime?: string;
  labels?: Label[];
  latestVersion?: ModelVersion;
  modelDescription?: string;
  /**
   * @example
   * https://***.md
   */
  modelDoc?: string;
  /**
   * @example
   * model-1123*****
   */
  modelId?: string;
  modelName?: string;
  /**
   * @example
   * 101
   */
  orderNumber?: number;
  /**
   * @example
   * ModelScope
   */
  origin?: string;
  /**
   * @example
   * 1557702098******
   */
  ownerId?: string;
  /**
   * @example
   * pai
   */
  provider?: string;
  /**
   * @example
   * {"en-US":"Large Language Model"  "zh-CN":"大语言模型"}
   */
  quickStartModelDescription?: { [key: string]: any };
  /**
   * @example
   * {"en-US":"qwen"，  "zh-CN":"千问"}
   */
  quickStartModelName?: { [key: string]: any };
  /**
   * @example
   * model-12346
   */
  relatedModelId?: string;
  /**
   * @example
   * text-classifiaction
   */
  task?: string;
  /**
   * @example
   * 300
   */
  trainingCount?: number;
  /**
   * @example
   * 1557702098******
   */
  userId?: string;
  /**
   * @example
   * 500
   */
  viewCount?: number;
  /**
   * @example
   * 50
   */
  viewCount7Days?: number;
  /**
   * @example
   * 234**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
      deploymentCount: 'DeploymentCount',
      domain: 'Domain',
      extraInfo: 'ExtraInfo',
      gmtCreateTime: 'GmtCreateTime',
      gmtModifiedTime: 'GmtModifiedTime',
      labels: 'Labels',
      latestVersion: 'LatestVersion',
      modelDescription: 'ModelDescription',
      modelDoc: 'ModelDoc',
      modelId: 'ModelId',
      modelName: 'ModelName',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      ownerId: 'OwnerId',
      provider: 'Provider',
      quickStartModelDescription: 'QuickStartModelDescription',
      quickStartModelName: 'QuickStartModelName',
      relatedModelId: 'RelatedModelId',
      task: 'Task',
      trainingCount: 'TrainingCount',
      userId: 'UserId',
      viewCount: 'ViewCount',
      viewCount7Days: 'ViewCount7Days',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
      deploymentCount: 'number',
      domain: 'string',
      extraInfo: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      gmtCreateTime: 'string',
      gmtModifiedTime: 'string',
      labels: { 'type': 'array', 'itemType': Label },
      latestVersion: ModelVersion,
      modelDescription: 'string',
      modelDoc: 'string',
      modelId: 'string',
      modelName: 'string',
      orderNumber: 'number',
      origin: 'string',
      ownerId: 'string',
      provider: 'string',
      quickStartModelDescription: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      quickStartModelName: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      relatedModelId: 'string',
      task: 'string',
      trainingCount: 'number',
      userId: 'string',
      viewCount: 'number',
      viewCount7Days: 'number',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.extraInfo) {
      $dara.Model.validateMap(this.extraInfo);
    }
    if(Array.isArray(this.labels)) {
      $dara.Model.validateArray(this.labels);
    }
    if(this.latestVersion && typeof (this.latestVersion as any).validate === 'function') {
      (this.latestVersion as any).validate();
    }
    if(this.quickStartModelDescription) {
      $dara.Model.validateMap(this.quickStartModelDescription);
    }
    if(this.quickStartModelName) {
      $dara.Model.validateMap(this.quickStartModelName);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

