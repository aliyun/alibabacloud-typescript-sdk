// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Project } from "./Project";


export class ListProjectsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The credential for querying subsequent pages when the total number of expected projects exceeds the specified MaxResults value. This parameter has a value only when not all projects are returned.
   * 
   * @example
   * MTIzNDU2Nzg6aW1tdGVzdDAx
   */
  nextToken?: string;
  /**
   * @remarks
   * The array of projects. Returns information about the projects.
   */
  projects?: Project[];
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4A7A2D0E-D8B8-4DA0-8127-EB32C660
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nextToken: 'NextToken',
      projects: 'Projects',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nextToken: 'string',
      projects: { 'type': 'array', 'itemType': Project },
      requestId: 'string',
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

