// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetRepoBuildRecordResponseBodyImage } from "./GetRepoBuildRecordResponseBodyImage";


export class GetRepoBuildRecordResponseBody extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * @example
   * 79174CBA-8556-443A-8976-22C922D7****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The return value.
   * 
   * @example
   * success
   */
  code?: string;
  /**
   * @remarks
   * The time when the image building was completed.
   * 
   * @example
   * 1568718698000
   */
  endTime?: number;
  /**
   * @remarks
   * The information about the image.
   */
  image?: GetRepoBuildRecordResponseBodyImage;
  /**
   * @remarks
   * Indicates whether the request is successful.
   * 
   * @example
   * true
   */
  isSuccess?: boolean;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * a78ec6fb-16ea-4649-93b7-f52afba7d9de1
   */
  requestId?: string;
  /**
   * @remarks
   * The time when the image building started.
   * 
   * @example
   * 1568718468000
   */
  startTime?: number;
  /**
   * @remarks
   * The status of the instance.
   * 
   * @example
   * true
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      code: 'Code',
      endTime: 'EndTime',
      image: 'Image',
      isSuccess: 'IsSuccess',
      requestId: 'RequestId',
      startTime: 'StartTime',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      code: 'string',
      endTime: 'number',
      image: GetRepoBuildRecordResponseBodyImage,
      isSuccess: 'boolean',
      requestId: 'string',
      startTime: 'number',
      status: 'string',
    };
  }

  validate() {
    if(this.image && typeof (this.image as any).validate === 'function') {
      (this.image as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

