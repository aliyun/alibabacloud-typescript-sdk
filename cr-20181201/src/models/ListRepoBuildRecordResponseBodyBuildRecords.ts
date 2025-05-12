// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListRepoBuildRecordResponseBodyBuildRecordsImage } from "./ListRepoBuildRecordResponseBodyBuildRecordsImage";


export class ListRepoBuildRecordResponseBodyBuildRecords extends $dara.Model {
  /**
   * @remarks
   * The ID of the image building record.
   * 
   * @example
   * 537e08ab-735e-415f-b7c2-160eb87f8****
   */
  buildRecordId?: string;
  /**
   * @remarks
   * The status of the image building.
   * 
   * @example
   * SUCCESS
   */
  buildStatus?: string;
  /**
   * @remarks
   * The time when the image building ended.
   * 
   * @example
   * 1572875610000
   */
  endTime?: string;
  /**
   * @remarks
   * The information about the image.
   */
  image?: ListRepoBuildRecordResponseBodyBuildRecordsImage;
  /**
   * @remarks
   * The time when the image building started.
   * 
   * @example
   * 1572872207000
   */
  startTime?: string;
  static names(): { [key: string]: string } {
    return {
      buildRecordId: 'BuildRecordId',
      buildStatus: 'BuildStatus',
      endTime: 'EndTime',
      image: 'Image',
      startTime: 'StartTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      buildRecordId: 'string',
      buildStatus: 'string',
      endTime: 'string',
      image: ListRepoBuildRecordResponseBodyBuildRecordsImage,
      startTime: 'string',
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

