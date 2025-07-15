// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteLiveAIStudioRequest extends $dara.Model {
  ownerId?: number;
  regionId?: string;
  /**
   * @remarks
   * The ID of the template. You can obtain the ID from the response to the CreateLiveAIStudio operation.
   * 
   * This parameter is required.
   * 
   * @example
   * 369ced1f-c33a-49e5-91da-bdaae3d6c1c2
   */
  studioId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      regionId: 'RegionId',
      studioId: 'StudioId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      regionId: 'string',
      studioId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

