// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineResponseBodyEnvsCodeDeployCodeVersions extends $dara.Model {
  codeVersion?: string;
  createTime?: string;
  description?: string;
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
  codeVersions?: GetRoutineResponseBodyEnvsCodeDeployCodeVersions[];
  creationTime?: string;
  deployId?: string;
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
  codeDeploy?: GetRoutineResponseBodyEnvsCodeDeploy;
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
  createTime?: string;
  defaultRelatedRecord?: string;
  description?: string;
  envs?: GetRoutineResponseBodyEnvs[];
  hasAssets?: boolean;
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

