// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListRenderingProjectsResponseBodyProjectsSessionAttribs extends $dara.Model {
  /**
   * @remarks
   * Startup mode
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
   * Project creation time
   * 
   * @example
   * 2024-09-09T18:44:49+08:00
   */
  creationTime?: string;
  /**
   * @remarks
   * Project description
   * 
   * @example
   * description
   */
  description?: string;
  /**
   * @remarks
   * Project ID
   * 
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @remarks
   * Project name
   * 
   * @example
   * prod-project
   */
  projectName?: string;
  /**
   * @remarks
   * Project session attributes
   */
  sessionAttribs?: ListRenderingProjectsResponseBodyProjectsSessionAttribs;
  /**
   * @remarks
   * Last update time
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
   * Project list
   */
  projects?: ListRenderingProjectsResponseBodyProjects[];
  /**
   * @remarks
   * Request ID
   * 
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
   * @remarks
   * Total number of matching projects
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

