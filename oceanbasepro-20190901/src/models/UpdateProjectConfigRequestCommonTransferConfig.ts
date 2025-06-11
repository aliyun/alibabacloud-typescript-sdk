// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateProjectConfigRequestCommonTransferConfig extends $dara.Model {
  sinkStoreFormat?: string;
  sourceStoreFormat?: string;
  static names(): { [key: string]: string } {
    return {
      sinkStoreFormat: 'SinkStoreFormat',
      sourceStoreFormat: 'SourceStoreFormat',
    };
  }

  static types(): { [key: string]: any } {
    return {
      sinkStoreFormat: 'string',
      sourceStoreFormat: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

