// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingProjectRequestSessionAttribs extends $dara.Model {
  /**
   * @remarks
   * The mode to start the cloud application service for the session. Valid values:
   * 
   * 1. Async: asynchronous
   * 
   * 2. Sync: synchronous
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
   * The description of the project. The description can be 0 to 255 characters in length.
   * 
   * @example
   * 项目概述
   */
  description?: string;
  /**
   * @remarks
   * The custom name of the project. This name is the unique identifier for the project.
   * The name must meet the following requirements:
   * 
   * 1. Be 1 to 128 characters in length.
   * 
   * 2. Contain only lowercase letters, digits, underscores (_), hyphens (-), and periods (.).
   * 
   * 3. Start and end with a letter or a digit.
   * 
   * This parameter is required.
   * 
   * @example
   * du_merchant_d
   */
  projectName?: string;
  /**
   * @remarks
   * The session properties.
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

