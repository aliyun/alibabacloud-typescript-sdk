// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetComputeResourceAuthUserMappingsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the compute resource.
   * 
   * This parameter is required.
   * 
   * @example
   * 100000
   */
  computeResourceId?: number;
  /**
   * @remarks
   * The DataWorks workspace to which the data source belongs.
   * 
   * This parameter is required.
   * 
   * @example
   * 1
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      computeResourceId: 'ComputeResourceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      computeResourceId: 'number',
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

