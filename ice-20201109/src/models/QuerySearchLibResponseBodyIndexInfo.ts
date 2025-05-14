// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySearchLibResponseBodyIndexInfo extends $dara.Model {
  indexReadiness?: string;
  indexStatus?: string;
  indexType?: string;
  static names(): { [key: string]: string } {
    return {
      indexReadiness: 'IndexReadiness',
      indexStatus: 'IndexStatus',
      indexType: 'IndexType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      indexReadiness: 'string',
      indexStatus: 'string',
      indexType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

