// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateRenderingProjectRequestSessionAttribs extends $dara.Model {
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

export class UpdateRenderingProjectRequest extends $dara.Model {
  description?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @example
   * idata_content
   */
  projectName?: string;
  sessionAttribs?: UpdateRenderingProjectRequestSessionAttribs;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      sessionAttribs: 'SessionAttribs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      projectId: 'string',
      projectName: 'string',
      sessionAttribs: UpdateRenderingProjectRequestSessionAttribs,
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

