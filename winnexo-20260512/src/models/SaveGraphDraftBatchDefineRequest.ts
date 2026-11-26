// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGraphDraftBatchDefineRequest extends $dara.Model {
  /**
   * @remarks
   * 平台应用 Token（控制台签发）。传入后将以 opsUserId 或 opsUserCode 指定的用户身份执行
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The list of draft change IDs.
   * 
   * @example
   * [401001, 401002]
   */
  draftChangeIds?: number[];
  /**
   * @remarks
   * The graph name.
   * 
   * This parameter is required.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * 代理用户编码（租户内唯一），仅当应用凭证配置为 source_uid 时使用
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * 代理用户ID（WINNEXO 平台用户ID），仅当应用凭证配置为 winnexo_uid 时使用
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The save mode.
   * 
   * @example
   * FULL_YAML
   */
  saveMode?: string;
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * The raw YAML text of the graph schema trimmed by READ permissions, with $ref references retained within the authorized subgraph.
   * 
   * This parameter is required.
   * 
   * @example
   * name: crm_graph
   */
  yamlEdit?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      draftChangeIds: 'draftChangeIds',
      graphName: 'graphName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      saveMode: 'saveMode',
      tenantId: 'tenantId',
      yamlEdit: 'yamlEdit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      draftChangeIds: { 'type': 'array', 'itemType': 'number' },
      graphName: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      saveMode: 'string',
      tenantId: 'string',
      yamlEdit: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.draftChangeIds)) {
      $dara.Model.validateArray(this.draftChangeIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

