// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyTagGroupsRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cd560e89-0459-4c8a-ad98-47d713e4abd6
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 365b955d-6f4d-4ab5-a6e1-9a301307f4b1
   */
  scriptId?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  tagGroups?: string;
  /**
   * @remarks
   * This parameter is required.
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

