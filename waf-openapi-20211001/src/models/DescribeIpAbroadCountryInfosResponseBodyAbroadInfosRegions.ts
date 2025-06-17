// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeIpAbroadCountryInfosResponseBodyAbroadInfosRegions extends $dara.Model {
  /**
   * @example
   * US-CA
   */
  abroadRegionId?: string;
  /**
   * @example
   * 加利福尼亚州
   */
  abroadRegionName?: string;
  static names(): { [key: string]: string } {
    return {
      abroadRegionId: 'AbroadRegionId',
      abroadRegionName: 'AbroadRegionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abroadRegionId: 'string',
      abroadRegionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

