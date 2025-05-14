// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGlobalDatabaseNetworksResponseBodyItemsLabels extends $dara.Model {
  GDNVersion?: string;
  static names(): { [key: string]: string } {
    return {
      GDNVersion: 'GDNVersion',
    };
  }

  static types(): { [key: string]: any } {
    return {
      GDNVersion: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

