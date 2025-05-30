// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataPropertiesExternalProjectProperties extends $dara.Model {
  /**
   * @remarks
   * Indicates whether the external project is an external project for [data lakehouse solution 2.0](https://www.alibabacloud.com/help/zh/maxcompute/user-guide/lake-warehouse-integrated-2-0-use-guide).
   * 
   * @example
   * true
   */
  isExternalCatalogBound?: string;
  static names(): { [key: string]: string } {
    return {
      isExternalCatalogBound: 'isExternalCatalogBound',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isExternalCatalogBound: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

