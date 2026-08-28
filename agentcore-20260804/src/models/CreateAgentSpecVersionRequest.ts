// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateAgentSpecVersionRequestBody extends $dara.Model {
  /**
   * @remarks
   * The existing version on which to base the draft.
   * 
   * @example
   * 1.0.0
   */
  basedOnVersion?: string;
  /**
   * @remarks
   * The version number for the draft. If not specified, the version number is automatically incremented.
   * 
   * @example
   * 2.0.0
   */
  targetVersion?: string;
  static names(): { [key: string]: string } {
    return {
      basedOnVersion: 'basedOnVersion',
      targetVersion: 'targetVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      basedOnVersion: 'string',
      targetVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateAgentSpecVersionRequest extends $dara.Model {
  /**
   * @remarks
   * The request body.
   */
  body?: CreateAgentSpecVersionRequestBody;
  static names(): { [key: string]: string } {
    return {
      body: 'body',
    };
  }

  static types(): { [key: string]: any } {
    return {
      body: CreateAgentSpecVersionRequestBody,
    };
  }

  validate() {
    if(this.body && typeof (this.body as any).validate === 'function') {
      (this.body as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

