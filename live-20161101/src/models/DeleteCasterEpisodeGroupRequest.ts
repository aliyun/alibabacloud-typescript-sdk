// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteCasterEpisodeGroupRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * The ID of the episode list. If the episode list was added by calling the [AddCasterEpisodeGroup](https://help.aliyun.com/document_detail/2848071.html) operation, check the value of the response parameter ProgramId to obtain the ID.
   * 
   * This parameter is required.
   * 
   * @example
   * a2b8e671-2fe5-4642-a2ec-bf932738****
   */
  programId?: string;
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      programId: 'ProgramId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      programId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

