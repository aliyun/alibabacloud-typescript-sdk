// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetEvaluatorResponseBodyEvaluatorSkills extends $dara.Model {
  /**
   * @remarks
   * The skill revision number used by this evaluator version.
   * 
   * @example
   * 1770386951147366810
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the skill purpose.
   * 
   * @example
   * Verify the factual basis in the response
   */
  description?: string;
  /**
   * @remarks
   * The display name of the skill.
   * 
   * @example
   * Fact-checking
   */
  displayName?: string;
  /**
   * @remarks
   * Indicates whether the skill is enabled in the queried evaluator version.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The skill name.
   * 
   * @example
   * fact-check
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'currentVersion',
      description: 'description',
      displayName: 'displayName',
      enable: 'enable',
      skillName: 'skillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      description: 'string',
      displayName: 'string',
      enable: 'boolean',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

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
   * Indicates whether this version can be selected when creating an evaluation task or an experiment plan.
   * 
   * @example
   * true
   */
  selectable?: boolean;
  /**
   * @remarks
   * The version status. DRAFT indicates a draft. PUBLISHED indicates that the version is published. OFFLINE indicates that the version is offline.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
  /**
   * @remarks
   * The time when the version was last updated. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1795478400
   */
  updatedAt?: number;
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
   * Initial version
   */
  versionDescription?: string;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      selectable: 'selectable',
      status: 'status',
      updatedAt: 'updatedAt',
      version: 'version',
      versionDescription: 'versionDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      selectable: 'boolean',
      status: 'string',
      updatedAt: 'number',
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
   * The list of annotation tags.
   * 
   * @example
   * ["__en"]
   */
  annotations?: string[];
  /**
   * @remarks
   * The current version configuration.
   * 
   * @example
   * {"prompt":"Evaluate the task completion"}
   */
  config?: { [key: string]: any };
  /**
   * @remarks
   * The creation time. The value is a UNIX timestamp in seconds.
   * 
   * @example
   * 1782816000
   */
  createdAt?: number;
  /**
   * @remarks
   * The current version number.
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
   * Determines whether the agent completed the user task
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * Workflow task completion
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
   * Indicates whether this version can be selected when creating an evaluation task or an experiment plan.
   * 
   * @example
   * true
   */
  selectable?: boolean;
  /**
   * @remarks
   * The list of business skill summaries for the queried evaluator version.
   * 
   * @example
   * [{"skillName":"fact-check","displayName":"Fact-checking","description":"Verify the factual basis in the response","enable":true,"currentVersion":"1770386951147366810"}]
   */
  skills?: GetEvaluatorResponseBodyEvaluatorSkills[];
  /**
   * @remarks
   * The version status. DRAFT indicates a draft. PUBLISHED indicates that the version is published. OFFLINE indicates that the version is offline.
   * 
   * @example
   * PUBLISHED
   */
  status?: string;
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
   * The update time. The value is a UNIX timestamp in seconds.
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
      selectable: 'selectable',
      skills: 'skills',
      status: 'status',
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
      selectable: 'boolean',
      skills: { 'type': 'array', 'itemType': GetEvaluatorResponseBodyEvaluatorSkills },
      status: 'string',
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
    if(Array.isArray(this.skills)) {
      $dara.Model.validateArray(this.skills);
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

