// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Label } from "./Label";
import { ModelVersion } from "./ModelVersion";


export class Model extends $dara.Model {
  /**
   * @example
   * PUBLIC
   */
  accessibility?: string;
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
   * Checkpoint
   */
  modelType?: string;
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
  tags?: Label[];
  /**
   * @example
   * text-classifiaction
   */
  task?: string;
  /**
   * @example
   * 1557702098******
   */
  userId?: string;
  /**
   * @example
   * 234**
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      accessibility: 'Accessibility',
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
      modelType: 'ModelType',
      orderNumber: 'OrderNumber',
      origin: 'Origin',
      ownerId: 'OwnerId',
      provider: 'Provider',
      tags: 'Tags',
      task: 'Task',
      userId: 'UserId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessibility: 'string',
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
      modelType: 'string',
      orderNumber: 'number',
      origin: 'string',
      ownerId: 'string',
      provider: 'string',
      tags: { 'type': 'array', 'itemType': Label },
      task: 'string',
      userId: 'string',
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
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

