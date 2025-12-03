// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the media asset. The ID can be the video ID or audio ID. Separate IDs with commas (,). You can specify a maximum of 20 IDs. You can use one of the following methods to obtain the ID of the media asset:
   * 
   * *   Log on to the ApsaraVideo VOD console. In the left-side navigation pane, choose Media Files > Audio/Video. On the Video and Audio page, view the ID of the media asset. This method is applicable to files that are uploaded by using the ApsaraVideo VOD console.
   * *   Obtain the value of VideoId from the response to the CreateUploadVideo operation that you call to upload media assets.
   * *   Obtain the value of VideoId from the response to the SearchMedia operation that you call to query the media ID after the media asset is uploaded.
   * 
   * This parameter is required.
   * 
   * @example
   * 61ccbdb06fa83012be4d8083f6****,7d2fbc380b0e08e55f****
   */
  mediaIds?: string;
  /**
   * @example
   * 123-123,1234-1234
   */
  referenceIds?: string;
  static names(): { [key: string]: string } {
    return {
      mediaIds: 'MediaIds',
      referenceIds: 'ReferenceIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      mediaIds: 'string',
      referenceIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

