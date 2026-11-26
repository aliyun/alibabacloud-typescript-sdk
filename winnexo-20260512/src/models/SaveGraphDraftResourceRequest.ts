// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGraphDraftResourceRequest extends $dara.Model {
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
   * The element type. Currently, only text is supported.
   * 
   * This parameter is required.
   * 
   * @example
   * object_type
   */
  elementType?: string;
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
   * The resource name.
   * 
   * This parameter is required.
   * 
   * @example
   * customer
   */
  resourceName?: string;
  /**
   * @remarks
   * The resource type.
   * 
   * This parameter is set to **instance**, which indicates that the resource type is instance.
   * 
   * This parameter is required.
   * 
   * @example
   * object
   */
  resourceType?: string;
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
   * The original YAML text of the graph schema trimmed by READ permissions, with $ref references within the authorized subgraph retained.
   * 
   * This parameter is required.
   * 
   * @example
   * name: customer\ndisplay_name: Customer
   */
  yamlEdit?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      elementType: 'elementType',
      graphName: 'graphName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      tenantId: 'tenantId',
      yamlEdit: 'yamlEdit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      elementType: 'string',
      graphName: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      resourceName: 'string',
      resourceType: 'string',
      tenantId: 'string',
      yamlEdit: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

