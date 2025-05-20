// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchSimilarImageClustersRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 1
   */
  driveId?: string;
  /**
   * @example
   * image/resize,m_fill,h_128,w_128,limit_0/format,jpg
   * 
   * @deprecated
   */
  imageThumbnailProcess?: string;
  /**
   * @example
   * 50
   */
  limit?: number;
  /**
   * @example
   * YWRzX3VzZXJfcHJvZmlsZV9je1bnQh***
   */
  marker?: string;
  /**
   * @example
   * desc
   */
  order?: string;
  static names(): { [key: string]: string } {
    return {
      driveId: 'drive_id',
      imageThumbnailProcess: 'image_thumbnail_process',
      limit: 'limit',
      marker: 'marker',
      order: 'order',
    };
  }

  static types(): { [key: string]: any } {
    return {
      driveId: 'string',
      imageThumbnailProcess: 'string',
      limit: 'number',
      marker: 'string',
      order: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

