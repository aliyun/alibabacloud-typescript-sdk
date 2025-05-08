// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeRegionResourceResponseBodyPager extends $dara.Model {
  page?: number;
  size?: number;
  total?: number;
  static names(): { [key: string]: string } {
    return {
      page: 'Page',
      size: 'Size',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      page: 'number',
      size: 'number',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

