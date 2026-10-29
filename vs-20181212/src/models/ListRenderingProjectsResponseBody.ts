// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingProjectsResponseBodyProjectsSessionAttribs extends $dara.Model {
  /**
   * @remarks
   * The startup mode.
   * 
   * @example
   * Sync
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

export class ListRenderingProjectsResponseBodyProjects extends $dara.Model {
  /**
   * @remarks
   * The time when the project was created. The time follows the ISO 8601 standard and includes a time zone offset in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
   * 
   * @example
   * 2024-09-09T18:44:49+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * The project description.
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * The project ID.
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * The project name.
   * 
   * @example
   * prod-project
   */
  projectName?: string;
  /**
   * @remarks
   * The session attributes of the project.
   */
  sessionAttribs?: ListRenderingProjectsResponseBodyProjectsSessionAttribs;
  /**
   * @remarks
   * The time when the project was updated. The time follows the ISO 8601 standard and includes a time zone offset in the YYYY-MM-DDTHH:mm:ss+HH:mm format.
   * 
   * @example
   * 2024-10-09T18:44:49+08:00
   */
  updateTime?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
      sessionAttribs: 'SessionAttribs',
      updateTime: 'UpdateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      projectId: 'string',
      projectName: 'string',
      sessionAttribs: ListRenderingProjectsResponseBodyProjectsSessionAttribs,
      updateTime: 'string',
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

export class ListRenderingProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The list of projects.
   */
  projects?: ListRenderingProjectsResponseBodyProjects[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of matched projects.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      projects: 'Projects',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projects: { 'type': 'array', 'itemType': ListRenderingProjectsResponseBodyProjects },
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.projects)) {
      $dara.Model.validateArray(this.projects);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

