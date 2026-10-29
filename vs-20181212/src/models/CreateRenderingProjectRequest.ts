// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingProjectRequestSessionAttribs extends $dara.Model {
  /**
   * @remarks
   * The mode in which the session starts the cloud application service. Valid values:
   * - Async: asynchronous mode.
   * - Sync: synchronous mode.
   * 
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
  /**
   * @remarks
   * The description of the project. The description must be 0 to 255 characters in length.
   * 
   * @example
   * Project overview
   */
  description?: string;
  /**
   * @remarks
   * The custom project name, which serves as the unique identifier for the project.
   * Naming conventions:
   * 1. The length must be 1 to 128 characters.
   * 2. The name can contain lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 3. The first and last characters must be letters or digits.
   * 
   * This parameter is required.
   * 
   * @example
   * du_merchant_d
   */
  projectName?: string;
  /**
   * @remarks
   * The session attributes.
   */
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

