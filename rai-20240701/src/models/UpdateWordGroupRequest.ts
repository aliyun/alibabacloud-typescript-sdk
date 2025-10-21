// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateWordGroupRequestBodyDataWordInfoList extends $dara.Model {
  /**
   * @remarks
   * Label.
   * 
   * @example
   * Buss.
   */
  label?: string;
  /**
   * @remarks
   * Keyword.
   * 
   * @example
   * Inv.
   */
  word?: string;
  static names(): { [key: string]: string } {
    return {
      label: 'Label',
      word: 'Word',
    };
  }

  static types(): { [key: string]: any } {
    return {
      label: 'string',
      word: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWordGroupRequestBodyData extends $dara.Model {
  /**
   * @remarks
   * List of keyword groups.
   */
  wordInfoList?: UpdateWordGroupRequestBodyDataWordInfoList[];
  static names(): { [key: string]: string } {
    return {
      wordInfoList: 'WordInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordInfoList: { 'type': 'array', 'itemType': UpdateWordGroupRequestBodyDataWordInfoList },
    };
  }

  validate() {
    if(Array.isArray(this.wordInfoList)) {
      $dara.Model.validateArray(this.wordInfoList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateWordGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Request object.
   */
  bodyData?: UpdateWordGroupRequestBodyData;
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
      bodyData: 'BodyData',
      commit: 'Commit',
      groupId: 'GroupId',
      groupName: 'GroupName',
      regionId: 'RegionId',
      wordInfoListModified: 'WordInfoListModified',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: UpdateWordGroupRequestBodyData,
      commit: 'boolean',
      groupId: 'number',
      groupName: 'string',
      regionId: 'string',
      wordInfoListModified: 'boolean',
    };
  }

  validate() {
    if(this.bodyData && typeof (this.bodyData as any).validate === 'function') {
      (this.bodyData as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

