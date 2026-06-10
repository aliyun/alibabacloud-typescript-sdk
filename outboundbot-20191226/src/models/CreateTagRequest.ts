// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateTagRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the instance.
   * 
   * This parameter is required.
   * 
   * @example
   * 174952ab-9825-4cc9-a5e2-de82d7fa4cdd
   */
  instanceId?: string;
  /**
   * @remarks
   * The ID of the script.
   * 
   * This parameter is required.
   * 
   * @example
   * 0fe7f71c-8771-42ef-9bb1-19aa16ae7120
   */
  scriptId?: string;
  /**
   * @remarks
   * The tag group name.
   * 
   * This parameter is required.
   * 
   * @example
   * 目标学历
   */
  tagGroup?: string;
  /**
   * @remarks
   * The tag name.
   * 
   * This parameter is required.
   * 
   * @example
   * 研究生
   */
  tagName?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      scriptId: 'ScriptId',
      tagGroup: 'TagGroup',
      tagName: 'TagName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      scriptId: 'string',
      tagGroup: 'string',
      tagName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

