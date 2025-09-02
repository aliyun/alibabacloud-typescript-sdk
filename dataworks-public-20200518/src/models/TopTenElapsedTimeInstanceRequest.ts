// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TopTenElapsedTimeInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to query the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

