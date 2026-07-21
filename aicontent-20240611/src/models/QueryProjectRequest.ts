// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the project.
   * 
   * @example
   * 123
   */
  projectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'projectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

