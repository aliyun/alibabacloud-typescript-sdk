// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBodyEngines extends $dara.Model {
  /**
   * @example
   * true
   */
  sast?: boolean;
  /**
   * @example
   * true
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

export class CreateProjectResponseBodySource extends $dara.Model {
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

export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @example
   * 1
   */
  configRevision?: number;
  /**
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  createdAt?: string;
  /**
   * @example
   * 3221
   */
  createdBy?: string;
  /**
   * @example
   * This is default function description by fc-deploy component
   */
  description?: string;
  engines?: CreateProjectResponseBodyEngines;
  /**
   * @example
   * 111
   */
  id?: number;
  /**
   * @example
   * such as ignoring low-severity vulnerabilities, etc.
   */
  instructionPrompt?: string;
  /**
   * @example
   * name
   */
  name?: string;
  /**
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  source?: CreateProjectResponseBodySource;
  /**
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  updatedAt?: string;
  static names(): { [key: string]: string } {
    return {
      configRevision: 'configRevision',
      createdAt: 'createdAt',
      createdBy: 'createdBy',
      description: 'description',
      engines: 'engines',
      id: 'id',
      instructionPrompt: 'instructionPrompt',
      name: 'name',
      requestId: 'requestId',
      source: 'source',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      configRevision: 'number',
      createdAt: 'string',
      createdBy: 'string',
      description: 'string',
      engines: CreateProjectResponseBodyEngines,
      id: 'number',
      instructionPrompt: 'string',
      name: 'string',
      requestId: 'string',
      source: CreateProjectResponseBodySource,
      updatedAt: 'string',
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

