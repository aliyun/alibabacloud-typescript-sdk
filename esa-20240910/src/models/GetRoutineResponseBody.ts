// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineResponseBodyEnvsCodeDeployCodeVersions extends $dara.Model {
  /**
   * @remarks
   * The code version number.
   * 
   * @example
   * 1746583193971399525
   */
  codeVersion?: string;
  /**
   * @remarks
   * The time when the code version was created. The time follows the RFC 3339 standard in the UTC time zone.
   * 
   * @example
   * 2025-07-23T09:01:40Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the code version.
   * 
   * @example
   * code version 1.
   */
  description?: string;
  /**
   * @remarks
   * The canary release percentage of the code version.
   * 
   * @example
   * 100
   */
  percentage?: number;
  static names(): { [key: string]: string } {
    return {
      codeVersion: 'CodeVersion',
      createTime: 'CreateTime',
      description: 'Description',
      percentage: 'Percentage',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersion: 'string',
      createTime: 'string',
      description: 'string',
      percentage: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoutineResponseBodyEnvsCodeDeploy extends $dara.Model {
  /**
   * @remarks
   * The list of deployed code version numbers.
   */
  codeVersions?: GetRoutineResponseBodyEnvsCodeDeployCodeVersions[];
  /**
   * @remarks
   * The time when the deployment was created. The time follows the RFC 3339 standard in the UTC time zone.
   * 
   * @example
   * 2023-05-11T09:21:36Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The deployment record ID.
   * 
   * @example
   * 589267
   */
  deployId?: string;
  /**
   * @remarks
   * The deployment strategy. Default value: percentage.
   * 
   * @example
   * percentage
   */
  strategy?: string;
  static names(): { [key: string]: string } {
    return {
      codeVersions: 'CodeVersions',
      creationTime: 'CreationTime',
      deployId: 'DeployId',
      strategy: 'Strategy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeVersions: { 'type': 'array', 'itemType': GetRoutineResponseBodyEnvsCodeDeployCodeVersions },
      creationTime: 'string',
      deployId: 'string',
      strategy: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.codeVersions)) {
      $dara.Model.validateArray(this.codeVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoutineResponseBodyEnvs extends $dara.Model {
  /**
   * @remarks
   * The percentage-based canary release deployment information.
   */
  codeDeploy?: GetRoutineResponseBodyEnvsCodeDeploy;
  /**
   * @remarks
   * The environment name.
   * 
   * @example
   * production
   */
  env?: string;
  static names(): { [key: string]: string } {
    return {
      codeDeploy: 'CodeDeploy',
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeDeploy: GetRoutineResponseBodyEnvsCodeDeploy,
      env: 'string',
    };
  }

  validate() {
    if(this.codeDeploy && typeof (this.codeDeploy as any).validate === 'function') {
      (this.codeDeploy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetRoutineResponseBody extends $dara.Model {
  /**
   * @remarks
   * The time when the Edge Routine was created. The time follows the RFC 3339 standard in the UTC time zone.
   * 
   * @example
   * 2024-03-11T01:23:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default access record.
   * 
   * @example
   * routine1.example.com
   */
  defaultRelatedRecord?: string;
  /**
   * @remarks
   * The description of the Edge Routine.
   * 
   * @example
   * ZWRpdCByb3V0aW5lIGNvbmZpZyBkZXNjcmlwdGlvbg
   */
  description?: string;
  /**
   * @remarks
   * The list of environment context.
   */
  envs?: GetRoutineResponseBodyEnvs[];
  /**
   * @remarks
   * Indicates whether the Routine has the Assets tag.
   * 
   * @example
   * false
   */
  hasAssets?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * EDBD3EB3-97DA-5465-AEF5-8DCA5DC5E395
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'CreateTime',
      defaultRelatedRecord: 'DefaultRelatedRecord',
      description: 'Description',
      envs: 'Envs',
      hasAssets: 'HasAssets',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultRelatedRecord: 'string',
      description: 'string',
      envs: { 'type': 'array', 'itemType': GetRoutineResponseBodyEnvs },
      hasAssets: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.envs)) {
      $dara.Model.validateArray(this.envs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

