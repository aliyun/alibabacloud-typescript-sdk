// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutputFilesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * 精确业务编号，来自文件登记或工作流实例关联
   * 
   * @example
   * REQ-20261012-001
   */
  bizId?: string;
  /**
   * @remarks
   * 可选协作空间 ID；未传保持当前用户个人产出范围
   * 
   * @example
   * cg_123e4567-e89b-42d3-a456-426614174001
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The type of the output item. Valid values: ppt, html, document, picture, slides, video, audio, email, and others.
   * 
   * @example
   * ppt
   */
  itemType?: string;
  /**
   * @remarks
   * The keyword for searching. Matches the output title or item name.
   * 
   * @example
   * string_value
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object). Used to filter results by name.
   * 
   * @example
   * string_value
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The page number, starting from 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of items per page. Valid values: 1 to 100.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * 精确会话 ID，覆盖普通会话、技能会话与任务 executionId
   * 
   * @example
   * session_123e4567-e89b-42d3-a456-426614174008
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether to display only outputs and output items with sharing enabled.
   * 
   * @example
   * False
   */
  sharedOnly?: boolean;
  /**
   * @remarks
   * 全部匹配的标签列表，来自文件登记或实例 variables.tags
   */
  tagsShrink?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. In winnexo-cli, pass it explicitly by using --tenant-id.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      collaborationGroupId: 'collaborationGroupId',
      itemType: 'itemType',
      keyword: 'keyword',
      operatingObjectName: 'operatingObjectName',
      page: 'page',
      pageSize: 'pageSize',
      sessionId: 'sessionId',
      sharedOnly: 'sharedOnly',
      tagsShrink: 'tags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      collaborationGroupId: 'string',
      itemType: 'string',
      keyword: 'string',
      operatingObjectName: 'string',
      page: 'number',
      pageSize: 'number',
      sessionId: 'string',
      sharedOnly: 'boolean',
      tagsShrink: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

