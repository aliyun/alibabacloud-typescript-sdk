// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDataAgentSessionRequestSessionConfig extends $dara.Model {
  /**
   * @example
   * ca-e*******ckd
   */
  customAgentId?: string;
  /**
   * @example
   * debug
   */
  customAgentStage?: string;
  /**
   * @example
   * false
   */
  enableSearch?: boolean;
  /**
   * @example
   * CHINESE
   */
  language?: string;
  /**
   * @example
   * ANALYSIS
   */
  mode?: string;
  static names(): { [key: string]: string } {
    return {
      customAgentId: 'CustomAgentId',
      customAgentStage: 'CustomAgentStage',
      enableSearch: 'EnableSearch',
      language: 'Language',
      mode: 'Mode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      customAgentId: 'string',
      customAgentStage: 'string',
      enableSearch: 'boolean',
      language: 'string',
      mode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDataAgentSessionRequest extends $dara.Model {
  /**
   * @example
   * cn-hangzhou
   */
  DMSUnit?: string;
  /**
   * @example
   * f-8*******01m
   */
  file?: string;
  sessionConfig?: CreateDataAgentSessionRequestSessionConfig;
  title?: string;
  /**
   * @example
   * 12****
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      DMSUnit: 'DMSUnit',
      file: 'File',
      sessionConfig: 'SessionConfig',
      title: 'Title',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DMSUnit: 'string',
      file: 'string',
      sessionConfig: CreateDataAgentSessionRequestSessionConfig,
      title: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    if(this.sessionConfig && typeof (this.sessionConfig as any).validate === 'function') {
      (this.sessionConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

