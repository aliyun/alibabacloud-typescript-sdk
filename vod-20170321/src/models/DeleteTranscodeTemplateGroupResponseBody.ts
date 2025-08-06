// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteTranscodeTemplateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The IDs of transcoding templates that were not found.
   */
  nonExistTranscodeTemplateIds?: string[];
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
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

