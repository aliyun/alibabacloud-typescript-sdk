// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateWordGroupRequestBodyDataWordInfoList extends $dara.Model {
  /**
   * @remarks
   * Label
   * 
   * @example
   * Buss.
   */
  label?: string;
  /**
   * @remarks
   * Keyword
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

export class CreateWordGroupRequestBodyData extends $dara.Model {
  /**
   * @remarks
   * Keyword group list
   */
  wordInfoList?: CreateWordGroupRequestBodyDataWordInfoList[];
  static names(): { [key: string]: string } {
    return {
      wordInfoList: 'WordInfoList',
    };
  }

  static types(): { [key: string]: any } {
    return {
      wordInfoList: { 'type': 'array', 'itemType': CreateWordGroupRequestBodyDataWordInfoList },
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

export class CreateWordGroupRequest extends $dara.Model {
  /**
   * @remarks
   * Request object
   */
  bodyData?: CreateWordGroupRequestBodyData;
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
   * Keyword group name
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
   * Workspace ID
   * 
   * @example
   * 643168
   */
  workspaceId?: number;
  static names(): { [key: string]: string } {
    return {
      bodyData: 'BodyData',
      commit: 'Commit',
      groupName: 'GroupName',
      regionId: 'RegionId',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bodyData: CreateWordGroupRequestBodyData,
      commit: 'boolean',
      groupName: 'string',
      regionId: 'string',
      workspaceId: 'number',
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

