// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetSwimLaneDetailRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the lane group.
   * 
   * @example
   * test
   */
  groupName?: string;
  /**
   * @remarks
   * The ID of the Service Mesh (ASM) instance.
   * 
   * This parameter is required.
   * 
   * @example
   * xxx
   */
  serviceMeshId?: string;
  /**
   * @remarks
   * The name of the lane.
   * 
   * @example
   * s1
   */
  swimLaneName?: string;
  static names(): { [key: string]: string } {
    return {
      groupName: 'GroupName',
      serviceMeshId: 'ServiceMeshId',
      swimLaneName: 'SwimLaneName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupName: 'string',
      serviceMeshId: 'string',
      swimLaneName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

