// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateAndPublishAgentSelectiveRequestSampleLibrary extends $dara.Model {
  enableSample?: boolean;
  sampleLibraryIdList?: string[];
  topK?: number;
  static names(): { [key: string]: string } {
    return {
      enableSample: 'enableSample',
      sampleLibraryIdList: 'sampleLibraryIdList',
      topK: 'topK',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enableSample: 'boolean',
      sampleLibraryIdList: { 'type': 'array', 'itemType': 'string' },
      topK: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.sampleLibraryIdList)) {
      $dara.Model.validateArray(this.sampleLibraryIdList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

