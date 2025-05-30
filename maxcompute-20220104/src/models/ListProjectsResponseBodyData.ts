// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListProjectsResponseBodyDataProjects } from "./ListProjectsResponseBodyDataProjects";


export class ListProjectsResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * A pagination token. Only continuous page turning is supported. If NextToken is not empty, the next page exists. The value of NextToken can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * AAAAAV3MpHK1AP0pfERHZN5pu6kvikyUl3ChyRxN+qLPvtOb
   */
  nextToken?: string;
  /**
   * @remarks
   * Indicates the marker after which the returned list begins.
   * 
   * @example
   * cHlvZHBzX3VkZl8xMDExNV8xNDU3NDI4NDkzKg==
   */
  marker?: string;
  /**
   * @remarks
   * The maximum number of entries returned per page.
   * 
   * @example
   * 10
   */
  maxItem?: number;
  /**
   * @remarks
   * The list of projects.
   */
  projects?: ListProjectsResponseBodyDataProjects[];
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      marker: 'marker',
      maxItem: 'maxItem',
      projects: 'projects',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      marker: 'string',
      maxItem: 'number',
      projects: { 'type': 'array', 'itemType': ListProjectsResponseBodyDataProjects },
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

