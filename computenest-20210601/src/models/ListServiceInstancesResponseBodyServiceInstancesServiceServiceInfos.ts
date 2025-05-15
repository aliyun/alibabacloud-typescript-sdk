// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListServiceInstancesResponseBodyServiceInstancesServiceServiceInfos extends $dara.Model {
  /**
   * @remarks
   * The URL of the service icon.
   * 
   * @example
   * https://example.com/service-image/c1c4a559-cc60-4af1-b976-98f356602462.png
   */
  image?: string;
  /**
   * @remarks
   * The language of the service instance.
   * 
   * @example
   * zh-CN
   */
  locale?: string;
  /**
   * @remarks
   * The name of the service.
   * 
   * @example
   * wordpress
   */
  name?: string;
  /**
   * @remarks
   * The description of the service.
   * 
   * @example
   * B是A公司自主设计并研发的开源分布式的关系型数据库
   */
  shortDescription?: string;
  static names(): { [key: string]: string } {
    return {
      image: 'Image',
      locale: 'Locale',
      name: 'Name',
      shortDescription: 'ShortDescription',
    };
  }

  static types(): { [key: string]: any } {
    return {
      image: 'string',
      locale: 'string',
      name: 'string',
      shortDescription: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

