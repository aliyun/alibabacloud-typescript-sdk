// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWordGroupShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Request object.
   */
  bodyDataShrink?: string;
  /**
   * @remarks
   * Whether to commit.
   * false: Not actually saved, only checked
   * true: Commit and save
   * 
   * @example
   * true
   */
  commit?: boolean;
  /**
   * @remarks
   * Keyword group ID.
   * 
   * @example
   * 1
   */
  groupId?: number;
  /**
   * @remarks
   * Keyword group name.
   * 
   * @example
   * testGroup
   */
  groupName?: string;
  /**
   * @remarks
   * Region ID.
   * 
   * @example
   * cn-shanghai
   */
  regionId?: string;
  /**
   * @remarks
   * Whether the keyword information has been modified.
   * 
   * @example
   * true
   */
  wordInfoListModified?: boolean;
  static names(): { [key: string]: string } {
    return {
      bodyDataShrink: 'BodyData',
      commit: 'Commit',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      wordInfoListModified: 'WordInfoListModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyDataShrink: 'string',
      commit: 'boolean',
      groupId: 'number',
      groupName: 'string',
      regionId: 'string',
      wordInfoListModified: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

