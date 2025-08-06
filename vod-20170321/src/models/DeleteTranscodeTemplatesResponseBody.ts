// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTranscodeTemplatesResponseBody extends $dara.Model {
  nonExistTranscodeTemplateIds?: string[];
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      nonExistTranscodeTemplateIds: 'NonExistTranscodeTemplateIds',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      nonExistTranscodeTemplateIds: { 'type': 'array', 'itemType': 'string' },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.nonExistTranscodeTemplateIds)) {
      $dara.Model.validateArray(this.nonExistTranscodeTemplateIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

