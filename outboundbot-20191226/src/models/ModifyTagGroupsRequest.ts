// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTagGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * cd560e89-0459-4c8a-ad98-47d713e4abd6
   */
  instanceId?: string;
  /**
   * @remarks
   * The script ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 365b955d-6f4d-4ab5-a6e1-9a301307f4b1
   */
  scriptId?: string;
  /**
   * @remarks
   * The tag groups to modify.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"TagName":"111","TagGroup":"多层次","ScriptId":"b4d0dcc8-892d-4323-8c9d-3568e5faa62f","showInput":true,"Id":"a683fa32-91c5-457e-9ddf-aa8549d14ce0"}]
   */
  tagGroups?: string;
  /**
   * @remarks
   * The list of tags.
   * 
   * This parameter is required.
   * 
   * @example
   * [{"TagGroup":"多层次","ScriptId":"b4d0dcc8-892d-43234-987c9d-3568e5faa62f","TagGroupIndex":0,"Id":"56728a30-c392-453a-a287-31af8301150f"}]
   */
  tags?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      tagGroups: 'TagGroups',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      tagGroups: 'string',
      tags: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

