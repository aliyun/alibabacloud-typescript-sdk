// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRenderingProjectsResponseBodyProjects } from "./ListRenderingProjectsResponseBodyProjects";


export class ListRenderingProjectsResponseBody extends $dara.Model {
  projects?: ListRenderingProjectsResponseBodyProjects[];
  /**
   * @example
   * BEA5625F-8FCF-48F4-851B-CA63946DA664
   */
  requestId?: string;
  /**
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

