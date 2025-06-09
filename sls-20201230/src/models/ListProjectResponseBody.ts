// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Project } from "./Project";


export class ListProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of returned projects on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The projects that meet the query conditions.
   */
  projects?: Project[];
  /**
   * @remarks
   * The total number of projects that meet the query conditions.
   * 
   * @example
   * 11
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'count',
      projects: 'projects',
      total: 'total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      projects: { 'type': 'array', 'itemType': Project },
      total: 'number',
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

