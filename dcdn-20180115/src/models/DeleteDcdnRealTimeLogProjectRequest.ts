// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDcdnRealTimeLogProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The name of a real-time log delivery project.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

