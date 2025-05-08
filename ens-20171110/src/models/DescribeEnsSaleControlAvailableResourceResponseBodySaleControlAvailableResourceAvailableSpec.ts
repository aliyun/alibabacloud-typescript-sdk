// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeEnsSaleControlAvailableResourceResponseBodySaleControlAvailableResourceAvailableSpec extends $dara.Model {
  cores?: string;
  memory?: string;
  specName?: string;
  specValue?: string;
  static names(): { [key: string]: string } {
    return {
      cores: 'Cores',
      memory: 'Memory',
      specName: 'SpecName',
      specValue: 'SpecValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cores: 'string',
      memory: 'string',
      specName: 'string',
      specValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

