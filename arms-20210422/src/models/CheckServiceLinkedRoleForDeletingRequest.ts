// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CheckServiceLinkedRoleForDeletingRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  deletionTaskId?: string;
  regionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  roleArn?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  SPIRegionId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  serviceName?: string;
  static names(): { [key: string]: string } {
    return {
      deletionTaskId: 'DeletionTaskId',
      regionId: 'RegionId',
      roleArn: 'RoleArn',
      SPIRegionId: 'SPIRegionId',
      serviceName: 'ServiceName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deletionTaskId: 'string',
      regionId: 'string',
      roleArn: 'string',
      SPIRegionId: 'string',
      serviceName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

