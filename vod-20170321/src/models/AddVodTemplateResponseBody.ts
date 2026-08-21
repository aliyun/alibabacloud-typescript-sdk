// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddVodTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4A*****F6-D7393642CA58
   */
  requestId?: string;
  /**
   * @remarks
   * The snapshot or animated image template ID. This ID can be used as a request parameter of the [SubmitSnapshotJob](~~SubmitSnapshotJob~~) or [SubmitDynamicImageJob](~~SubmitDynamicImageJob~~) operation to initiate snapshot or animated image processing.
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

