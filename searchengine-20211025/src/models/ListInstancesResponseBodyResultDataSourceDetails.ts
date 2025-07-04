// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListInstancesResponseBodyResultDataSourceDetailsConfig } from "./ListInstancesResponseBodyResultDataSourceDetailsConfig";


export class ListInstancesResponseBodyResultDataSourceDetails extends $dara.Model {
  config?: ListInstancesResponseBodyResultDataSourceDetailsConfig;
  indexName?: string;
  type?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'config',
      indexName: 'indexName',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: ListInstancesResponseBodyResultDataSourceDetailsConfig,
      indexName: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.config && typeof (this.config as any).validate === 'function') {
      (this.config as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

