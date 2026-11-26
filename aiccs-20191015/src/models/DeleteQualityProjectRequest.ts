// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteQualityProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The AICCS instance ID. You can obtain the ID from the Artificial Intelligence Cloud Call Service console.
   * 
   * This parameter is required.
   * 
   * @example
   * ccc_xp_pre***
   */
  instanceId?: string;
  /**
   * @remarks
   * The quality inspection task ID.
   * 
   * @example
   * 15
   */
  projectId?: number;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      projectId: 'ProjectId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
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

