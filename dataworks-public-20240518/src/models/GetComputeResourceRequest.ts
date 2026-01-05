// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The computing resource ID, which is the unique identifier for the resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 11792
   */
  id?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * This parameter is required.
   * 
   * @example
   * 10003
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

