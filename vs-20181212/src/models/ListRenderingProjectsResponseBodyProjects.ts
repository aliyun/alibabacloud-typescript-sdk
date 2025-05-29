// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRenderingProjectsResponseBodyProjectsSessionAttribs } from "./ListRenderingProjectsResponseBodyProjectsSessionAttribs";


export class ListRenderingProjectsResponseBodyProjects extends $dara.Model {
  /**
   * @example
   * 2024-09-09T18:44:49+08:00
   */
  creationTime?: string;
  /**
   * @example
   * description
   */
  description?: string;
  /**
   * @example
   * project-422bc38dfgh5eb44149f135ef76304f63b
   */
  projectId?: string;
  /**
   * @example
   * prod-project
   */
  projectName?: string;
  sessionAttribs?: ListRenderingProjectsResponseBodyProjectsSessionAttribs;
  /**
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

