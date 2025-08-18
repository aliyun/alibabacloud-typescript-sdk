// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRoutineResponseBodyEnvs extends $dara.Model {
  /**
   * @remarks
   * The regions for canary release.
   */
  canaryAreaList?: string[];
  /**
   * @remarks
   * The version number for canary release.
   * 
   * @example
   * 1710120201067577628
   */
  canaryCodeVersion?: string;
  /**
   * @remarks
   * The version number of the code in the environment.
   * 
   * @example
   * 1710120201067577628
   */
  codeVersion?: string;
  /**
   * @remarks
   * The environment type.
   * 
   * @example
   * production
   */
  env?: string;
  static names(): { [key: string]: string } {
    return {
      canaryAreaList: 'CanaryAreaList',
      canaryCodeVersion: 'CanaryCodeVersion',
      codeVersion: 'CodeVersion',
      env: 'Env',
    };
  }

  static types(): { [key: string]: any } {
    return {
      canaryAreaList: { 'type': 'array', 'itemType': 'string' },
      canaryCodeVersion: 'string',
      codeVersion: 'string',
      env: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.canaryAreaList)) {
      $dara.Model.validateArray(this.canaryAreaList);
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
   * The time when the routine was created.
   * 
   * @example
   * 2024-03-11T01:23:21Z
   */
  createTime?: string;
  /**
   * @remarks
   * The default record name to access.
   * 
   * @example
   * routine1.example.com
   */
  defaultRelatedRecord?: string;
  /**
   * @remarks
   * The description of the routine.
   * 
   * @example
   * ZWRpdCByb3V0aW5lIGNvbmZpZyBkZXNjcmlwdGlvbg
   */
  description?: string;
  /**
   * @remarks
   * The information about the environments.
   */
  envs?: GetRoutineResponseBodyEnvs[];
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
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      defaultRelatedRecord: 'string',
      description: 'string',
      envs: { 'type': 'array', 'itemType': GetRoutineResponseBodyEnvs },
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

