// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVodTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The ID of the snapshot template. You can call the [SubmitSnapshotJob](https://help.aliyun.com/document_detail/72213.html) operation to submit snapshot jobs.
   * 
   * @example
   * f5b228fe6930e*****0d6bf55bd87789
   */
  vodTemplateId?: string;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      vodTemplateId: 'VodTemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      vodTemplateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

