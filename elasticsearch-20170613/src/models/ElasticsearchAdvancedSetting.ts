// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ElasticsearchAdvancedSetting extends $dara.Model {
  gcName?: string;
  static names(): { [key: string]: string } {
    return {
      gcName: 'gcName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      gcName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

