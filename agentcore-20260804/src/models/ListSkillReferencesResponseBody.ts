// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillReferencesResponseBodyDataPageItems extends $dara.Model {
  /**
   * @remarks
   * The ID of the referencing entity, which is the identifier of the agent or agent spec.
   * 
   * @example
   * agent-1234567890abcdef
   */
  ownerId?: string;
  /**
   * @remarks
   * The type of the referencing entity. Valid values: AGENT and AGENTSPEC.
   * 
   * @example
   * AGENT
   */
  ownerType?: string;
  /**
   * @remarks
   * The version of the referencing entity.
   * 
   * @example
   * 1.0.0
   */
  ownerVersion?: string;
  /**
   * @remarks
   * The reference selector type. Valid values: LABEL and VERSION.
   * 
   * @example
   * LABEL
   */
  selectorType?: string;
  /**
   * @remarks
   * The reference selector value. Valid values: latest, a named label, HEAD, or a specific version.
   * 
   * @example
   * HEAD
   */
  selectorValue?: string;
  /**
   * @remarks
   * The name of the referenced skill.
   * 
   * @example
   * web-search
   */
  skillName?: string;
  /**
   * @remarks
   * The ID of the workspace to which the reference belongs.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'ownerId',
      ownerType: 'ownerType',
      ownerVersion: 'ownerVersion',
      selectorType: 'selectorType',
      selectorValue: 'selectorValue',
      skillName: 'skillName',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'string',
      ownerType: 'string',
      ownerVersion: 'string',
      selectorType: 'string',
      selectorValue: 'string',
      skillName: 'string',
      workspaceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillReferencesResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The list of skill reference relationships on the current page.
   */
  pageItems?: ListSkillReferencesResponseBodyDataPageItems[];
  /**
   * @remarks
   * The current page number, starting from 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The total number of available pages.
   * 
   * @example
   * 5
   */
  pagesAvailable?: number;
  /**
   * @remarks
   * The total number of reference relationships that meet the conditions.
   * 
   * @example
   * 100
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageItems: 'pageItems',
      pageNumber: 'pageNumber',
      pagesAvailable: 'pagesAvailable',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageItems: { 'type': 'array', 'itemType': ListSkillReferencesResponseBodyDataPageItems },
      pageNumber: 'number',
      pagesAvailable: 'number',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.pageItems)) {
      $dara.Model.validateArray(this.pageItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListSkillReferencesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The skill reference relationship data returned by the paging query.
   */
  data?: ListSkillReferencesResponseBodyData;
  /**
   * @remarks
   * The request ID used for troubleshooting.
   * 
   * @example
   * 5C6D9E10-1234-5678-9ABC-DEF012345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListSkillReferencesResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

