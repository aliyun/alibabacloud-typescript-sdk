// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults } from "./QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults";


export class QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResult extends $dara.Model {
  /**
   * @remarks
   * The OSS bucket that stores the video thumbnail.
   * 
   * @example
   * example-Bucket-****
   */
  bucket?: string;
  /**
   * @remarks
   * The OSS region in which the video thumbnail resides.
   * 
   * @example
   * oss-cn-shanghai
   */
  location?: string;
  /**
   * @remarks
   * The Object Storage Service (OSS) object that is used as the video thumbnail.
   * 
   * @example
   * test/ai/censor/v2/vme-****.jpg
   */
  object?: string;
  /**
   * @remarks
   * The moderation results of the content moderation jobs.
   */
  results?: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults;
  static names(): { [key: string]: string } {
    return {
      bucket: 'Bucket',
      location: 'Location',
      object: 'Object',
      results: 'Results',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bucket: 'string',
      location: 'string',
      object: 'string',
      results: QueryMediaCensorJobListResponseBodyMediaCensorJobListMediaCensorJobCoverImageCensorResultsCoverImageCensorResultResults,
    };
  }

  validate() {
    if(this.results && typeof (this.results as any).validate === 'function') {
      (this.results as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

