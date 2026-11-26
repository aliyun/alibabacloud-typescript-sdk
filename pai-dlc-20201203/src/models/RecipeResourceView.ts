// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { RecipeSpec } from "./RecipeSpec";


export class RecipeResourceView extends $dara.Model {
  /**
   * @remarks
   * 资源池行 ID
   * 
   * @example
   * 1001
   */
  resourceId?: number;
  /**
   * @remarks
   * 资源池类型，取值：train / eval
   * 
   * @example
   * train
   */
  resourceType?: string;
  /**
   * @remarks
   * 资源规格列表，采用 CustomJob 资源形状（与入参 open_struct_RecipeSpec 同构），回显存储值
   * 
   * @example
   * [{"PodCount":1,"CPU":"4","Memory":"8Gi","GPU":"1","GPUType":"A100","QuotaId":"quotag2uo09dyp40"}]
   */
  specs?: RecipeSpec[];
  static names(): { [key: string]: string } {
    return {
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      specs: 'Specs',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'number',
      resourceType: 'string',
      specs: { 'type': 'array', 'itemType': RecipeSpec },
    };
  }

  validate() {
    if(Array.isArray(this.specs)) {
      $dara.Model.validateArray(this.specs);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

