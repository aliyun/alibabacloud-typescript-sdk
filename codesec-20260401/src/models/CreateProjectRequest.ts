// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectRequestEngines extends $dara.Model {
  /**
   * @example
   * true
   */
  sast?: boolean;
  /**
   * @example
   * false
   */
  sca?: boolean;
  static names(): { [key: string]: string } {
    return {
      sast: 'sast',
      sca: 'sca',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sast: 'boolean',
      sca: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateProjectRequestSource extends $dara.Model {
  /**
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
   * @example
   * This is default function description by fc-deploy component
   */
  description?: string;
  engines?: CreateProjectRequestEngines;
  /**
   * @example
   * such as ignoring low-severity vulnerabilities, etc.
   */
  instructionPrompt?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * user_paswd_103
   */
  name?: string;
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

