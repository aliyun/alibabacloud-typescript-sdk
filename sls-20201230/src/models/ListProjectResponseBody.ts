// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Project } from "./Project";


export class ListProjectResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of projects returned on the current page.
   * 
   * @example
   * 2
   */
  count?: number;
  /**
   * @remarks
   * The list of projects that meet the query criteria.
   * 
   * @example
   * Not applicable
   */
  projects?: Project[];
  /**
   * @remarks
   * The total number of projects that meet the query criteria.
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

