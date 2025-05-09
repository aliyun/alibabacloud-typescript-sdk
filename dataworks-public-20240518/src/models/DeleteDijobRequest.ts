// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteDIJobRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is deprecated. Use the Id parameter instead.
   * 
   * @example
   * 11126
   * 
   * @deprecated
   */
  DIJobId?: number;
  /**
   * @remarks
   * The ID of the synchronization task.
   * 
   * @example
   * 11126
   */
  id?: number;
  /**
   * @remarks
   * The DataWorks workspace ID.
   * 
   * @example
   * 108864
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      DIJobId: 'DIJobId',
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DIJobId: 'number',
      id: 'number',
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

