// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMdsCubeResourcesRequest extends $dara.Model {
  /**
   * @example
   * ALIPUBE5C3F6D091419
   */
  appId?: string;
  /**
   * @example
   * 1
   */
  pageNum?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * test12435
   */
  templateId?: string;
  /**
   * @example
   * ZXCXMAHQ-zh_CN
   */
  tenantId?: string;
  /**
   * @example
   * dev
   */
  workspaceId?: string;
  /**
   * @example
   * test
   */
  test?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      pageNum: 'PageNum',
      pageSize: 'PageSize',
      templateId: 'TemplateId',
      tenantId: 'TenantId',
      workspaceId: 'WorkspaceId',
      test: 'test',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      pageNum: 'number',
      pageSize: 'number',
      templateId: 'string',
      tenantId: 'string',
      workspaceId: 'string',
      test: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

