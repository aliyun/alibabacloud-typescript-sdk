// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateResponseBodyTemplateList extends $dara.Model {
  /**
   * @example
   * URL
   */
  coverUrl?: string;
  /**
   * @example
   * 1596506100000
   */
  createTime?: number;
  /**
   * @example
   * WORKBOOK
   */
  docType?: string;
  /**
   * @example
   * 123
   */
  id?: string;
  /**
   * @example
   * user_template
   */
  templateType?: string;
  /**
   * @example
   * title
   */
  title?: string;
  /**
   * @example
   * 1596506100000
   */
  updateTime?: number;
  /**
   * @example
   * workspaceId
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      coverUrl: 'CoverUrl',
      createTime: 'CreateTime',
      docType: 'DocType',
      id: 'Id',
      templateType: 'TemplateType',
      title: 'Title',
      updateTime: 'UpdateTime',
      workspaceId: 'WorkspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverUrl: 'string',
      createTime: 'number',
      docType: 'string',
      id: 'string',
      templateType: 'string',
      title: 'string',
      updateTime: 'number',
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

