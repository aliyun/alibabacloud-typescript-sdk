// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequestEnginesSastConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate remediation suggestions.
   */
  remediation?: boolean;
  static names(): { [key: string]: string } {
    return {
      remediation: 'remediation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestEnginesScaConfig extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to generate remediation suggestions.
   */
  remediation?: boolean;
  static names(): { [key: string]: string } {
    return {
      remediation: 'remediation',
    };
  }

  static types(): { [key: string]: any } {
    return {
      remediation: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestEngines extends $dara.Model {
  /**
   * @remarks
   * Specifies whether SAST is supported.
   * 
   * @example
   * true
   */
  sast?: boolean;
  /**
   * @remarks
   * The engine-level configuration.
   */
  sastConfig?: CreateProjectRequestEnginesSastConfig;
  /**
   * @remarks
   * Specifies whether SCA is supported.
   * 
   * @example
   * false
   */
  sca?: boolean;
  /**
   * @remarks
   * The engine-level configuration.
   */
  scaConfig?: CreateProjectRequestEnginesScaConfig;
  static names(): { [key: string]: string } {
    return {
      sast: 'sast',
      sastConfig: 'sastConfig',
      sca: 'sca',
      scaConfig: 'scaConfig',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sast: 'boolean',
      sastConfig: CreateProjectRequestEnginesSastConfig,
      sca: 'boolean',
      scaConfig: CreateProjectRequestEnginesScaConfig,
    };
  }

  validate() {
    if(this.sastConfig && typeof (this.sastConfig as any).validate === 'function') {
      (this.sastConfig as any).validate();
    }
    if(this.scaConfig && typeof (this.scaConfig as any).validate === 'function') {
      (this.scaConfig as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestSource extends $dara.Model {
  /**
   * @remarks
   * The project type.
   * 
   * @example
   * api
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The description.
   * 
   * @example
   * This is default function description by fc-deploy component
   */
  description?: string;
  /**
   * @remarks
   * The engine switches for the project or scan snapshot. Only SAST and SCA are supported.
   */
  engines?: CreateProjectRequestEngines;
  /**
   * @remarks
   * The natural language prompt that describes scanning or result processing preferences, such as ignoring low-risk vulnerabilities.
   * 
   * @example
   * such as ignoring low-severity vulnerabilities, etc.
   */
  instructionPrompt?: string;
  /**
   * @remarks
   * The project name.
   * 
   * This parameter is required.
   * 
   * @example
   * user_paswd_103
   */
  name?: string;
  /**
   * @remarks
   * The project source.
   */
  source?: CreateProjectRequestSource;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      engines: 'engines',
      instructionPrompt: 'instructionPrompt',
      name: 'name',
      source: 'source',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      engines: CreateProjectRequestEngines,
      instructionPrompt: 'string',
      name: 'string',
      source: CreateProjectRequestSource,
    };
  }

  validate() {
    if(this.engines && typeof (this.engines as any).validate === 'function') {
      (this.engines as any).validate();
    }
    if(this.source && typeof (this.source as any).validate === 'function') {
      (this.source as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

