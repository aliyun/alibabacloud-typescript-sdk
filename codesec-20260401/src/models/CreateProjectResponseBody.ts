// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateProjectResponseBodyEngines extends $dara.Model {
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
   * Specifies whether SCA is supported.
   * 
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

export class CreateProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The project configuration version number.
   * 
   * @example
   * 1
   */
  configRevision?: number;
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2026-08-27T00:53:46.774Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The user ID of the project creator.
   * 
   * @example
   * 3221
   */
  createdBy?: string;
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
  engines?: CreateProjectResponseBodyEngines;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * 111
   */
  id?: number;
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
   * @example
   * name
   */
  name?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 9A1F403F-0A85-5578-8B7C-55E3E9408659
   */
  requestId?: string;
  /**
   * @remarks
   * The project source.
   */
  source?: CreateProjectResponseBodySource;
  /**
   * @remarks
   * The update time.
   * 
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

