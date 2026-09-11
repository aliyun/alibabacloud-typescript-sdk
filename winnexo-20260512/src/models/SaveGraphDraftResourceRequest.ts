// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SaveGraphDraftResourceRequest extends $dara.Model {
  /**
   * @remarks
   * 资源小类：resourceType=object 时固定 object_type；resourceType=element 时为 indicator / logic / process / rule / analysis 之一
   * 
   * This parameter is required.
   * 
   * @example
   * object_type
   */
  elementType?: string;
  /**
   * @remarks
   * 图谱名称，须已存在（active 记录）
   * 
   * This parameter is required.
   * 
   * @example
   * crm_graph
   */
  graphName?: string;
  /**
   * @remarks
   * 资源名（创建后不可改名，底层校验）
   * 
   * This parameter is required.
   * 
   * @example
   * customer
   */
  resourceName?: string;
  /**
   * @remarks
   * 资源大类：object（对象）/ element（业务元素）
   * 
   * This parameter is required.
   * 
   * @example
   * object
   */
  resourceType?: string;
  /**
   * @remarks
   * 租户ID，公共参数，缺省时使用调用方默认租户
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  /**
   * @remarks
   * 单资源 YAML 文本
   * 
   * This parameter is required.
   * 
   * @example
   * name: customer\\ndisplay_name: 客户
   */
  yamlEdit?: string;
  static names(): { [key: string]: string } {
    return {
      elementType: 'elementType',
      graphName: 'graphName',
      resourceName: 'resourceName',
      resourceType: 'resourceType',
      tenantId: 'tenantId',
      yamlEdit: 'yamlEdit',
    };
  }

  static types(): { [key: string]: any } {
    return {
      elementType: 'string',
      graphName: 'string',
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

