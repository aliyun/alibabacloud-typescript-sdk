// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEvaluatorResponseBodyEvaluatorVersions extends $dara.Model {
  /**
   * @remarks
   * The time when the version was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1782816000
   */
  createdAt?: number;
  /**
   * @remarks
   * The version number.
   * 
   * @example
   * 1.0.0
   */
  version?: string;
  /**
   * @remarks
   * The version description.
   * 
   * @example
   * 初始版本
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      version: 'version',
      versionDescription: 'versionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      version: 'string',
      versionDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEvaluatorResponseBodyEvaluator extends $dara.Model {
  /**
   * @remarks
   * The AgentSpace name.
   * 
   * @example
   * prod-agentspace
   */
  agentSpace?: string;
  /**
   * @remarks
   * The list of annotations.
   * 
   * @example
   * ["__en"]
   */
  annotations?: string[];
  /**
   * @remarks
   * The configuration of the current version.
   * 
   * @example
   * {"prompt":"请评估任务完成度"}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The time when the evaluator was created. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1782816000
   */
  createdAt?: number;
  /**
   * @remarks
   * The version number returned in the current response.
   * 
   * @example
   * 1.0.0
   */
  currentVersion?: string;
  /**
   * @remarks
   * The evaluator description.
   * 
   * @example
   * 判断 Agent 是否完成用户任务
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * 链路任务完成度
   */
  displayName?: string;
  /**
   * @remarks
   * The latest version number.
   * 
   * @example
   * 1.0.0
   */
  latestVersion?: string;
  /**
   * @remarks
   * The evaluation metric name.
   * 
   * @example
   * agent_task_completion
   */
  metricName?: string;
  /**
   * @remarks
   * The evaluator name.
   * 
   * @example
   * trace_task_completion
   */
  name?: string;
  /**
   * @remarks
   * The evaluator properties.
   * 
   * @example
   * {"agentEvaluatorMode":"raw_prompt"}
   */
  properties?: { [key: string]: any };
  /**
   * @remarks
   * The evaluator type.
   * 
   * @example
   * AGENT
   */
  type?: string;
  /**
   * @remarks
   * The time when the evaluator was last updated. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1782816600
   */
  updatedAt?: number;
  /**
   * @remarks
   * The list of versions.
   * 
   * @example
   * [{"version":"1.0.0"}]
   */
  versions?: GetEvaluatorResponseBodyEvaluatorVersions[];
  static names(): { [key: string]: string } {
    return {
      agentSpace: 'agentSpace',
      annotations: 'annotations',
      config: 'config',
      createdAt: 'createdAt',
      currentVersion: 'currentVersion',
      description: 'description',
      displayName: 'displayName',
      latestVersion: 'latestVersion',
      metricName: 'metricName',
      name: 'name',
      properties: 'properties',
      type: 'type',
      updatedAt: 'updatedAt',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentSpace: 'string',
      annotations: { 'type': 'array', 'itemType': 'string' },
      config: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      createdAt: 'number',
      currentVersion: 'string',
      description: 'string',
      displayName: 'string',
      latestVersion: 'string',
      metricName: 'string',
      name: 'string',
      properties: { 'type': 'map', 'keyType': 'string', 'valueType': 'any' },
      type: 'string',
      updatedAt: 'number',
      versions: { 'type': 'array', 'itemType': GetEvaluatorResponseBodyEvaluatorVersions },
    };
  }

  validate() {
    if(Array.isArray(this.annotations)) {
      $dara.Model.validateArray(this.annotations);
    }
    if(this.config) {
      $dara.Model.validateMap(this.config);
    }
    if(this.properties) {
      $dara.Model.validateMap(this.properties);
    }
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetEvaluatorResponseBody extends $dara.Model {
  /**
   * @remarks
   * The evaluator details.
   * 
   * @example
   * {"name":"trace_task_completion","type":"AGENT","currentVersion":"1.0.0"}
   */
  evaluator?: GetEvaluatorResponseBodyEvaluator;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 3FE4CD1E-FF41-56BE-B590-7A021D9C1524
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      evaluator: 'evaluator',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      evaluator: GetEvaluatorResponseBodyEvaluator,
      requestId: 'string',
    };
  }

  validate() {
    if(this.evaluator && typeof (this.evaluator as any).validate === 'function') {
      (this.evaluator as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

