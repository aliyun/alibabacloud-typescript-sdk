// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingProjectRequestSessionAttribs extends $dara.Model {
  /**
   * @example
   * Async
   */
  startMode?: string;
  static names(): { [key: string]: string } {
    return {
      startMode: 'StartMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      startMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateRenderingProjectRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * du_merchant_d
   */
  projectName?: string;
  sessionAttribs?: CreateRenderingProjectRequestSessionAttribs;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      projectName: 'ProjectName',
      sessionAttribs: 'SessionAttribs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      projectName: 'string',
      sessionAttribs: CreateRenderingProjectRequestSessionAttribs,
    };
  }

  validate() {
    if(this.sessionAttribs && typeof (this.sessionAttribs as any).validate === 'function') {
      (this.sessionAttribs as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

