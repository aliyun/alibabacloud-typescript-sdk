// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComponentRequest extends $dara.Model {
  /**
   * @remarks
   * The component ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 1112312312312
   */
  componentId?: string;
  /**
   * @remarks
   * The DataWorks workspace ID. You can log on to the DataWorks console and go to the Workspace page to query the ID. You must configure either this parameter or the ProjectIdentifier parameter to determine the DataWorks workspace to which the operation is applied.
   * 
   * @example
   * 10000
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      componentId: 'ComponentId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      componentId: 'string',
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

