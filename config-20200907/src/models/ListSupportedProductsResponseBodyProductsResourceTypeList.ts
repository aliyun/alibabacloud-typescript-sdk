// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSupportedProductsResponseBodyProductsResourceTypeList extends $dara.Model {
  /**
   * @remarks
   * The identifier of the resource type.
   * 
   * @example
   * ACS::ECS::Instance
   */
  resourceType?: string;
  /**
   * @remarks
   * The English name of the resource type.
   * 
   * @example
   * Ecs Instance
   */
  typeNameEn?: string;
  /**
   * @remarks
   * The Chinese name of the resource type.
   * 
   * @example
   * ECS实例
   */
  typeNameZh?: string;
  /**
   * @remarks
   * The URL of the resource type in the console.
   * 
   * @example
   * https://ecs.console.aliyun.com/#/server/@{ResourceId}/detail?regionId=@{RegionId}
   */
  typePageLink?: string;
  static names(): { [key: string]: string } {
    return {
      resourceType: 'ResourceType',
      typeNameEn: 'TypeNameEn',
      typeNameZh: 'TypeNameZh',
      typePageLink: 'TypePageLink',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceType: 'string',
      typeNameEn: 'string',
      typeNameZh: 'string',
      typePageLink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

