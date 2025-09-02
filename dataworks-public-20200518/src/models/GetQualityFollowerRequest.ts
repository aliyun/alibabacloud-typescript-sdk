// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetQualityFollowerRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the partition filter expression.
   * 
   * This parameter is required.
   * 
   * @example
   * 1234
   */
  entityId?: number;
  /**
   * @remarks
   * The ID of the DataWorks workspace.
   * 
   * @example
   * 27
   */
  projectId?: number;
  /**
   * @remarks
   * The name of the engine or data source.
   * 
   * This parameter is required.
   * 
   * @example
   * autotest
   */
  projectName?: string;
  static names(): { [key: string]: string } {
    return {
      entityId: 'EntityId',
      projectId: 'ProjectId',
      projectName: 'ProjectName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityId: 'number',
      projectId: 'number',
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

