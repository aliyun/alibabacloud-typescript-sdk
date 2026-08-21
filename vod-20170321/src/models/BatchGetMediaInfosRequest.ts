// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset IDs, which are audio/video IDs (VideoId). Separate multiple IDs with commas (,). You can specify up to 20 IDs. You can obtain the IDs by using the following methods:
   * 
   * - For audio/video files uploaded through the console, log on to the ApsaraVideo VOD console and choose Media Files > Audio/Video to view the audio/video IDs.
   * - When you call the operation to obtain the upload URL and credential for audio/video files, the VideoId value is returned as a response parameter.
   * - After an audio/video file is uploaded, you can call the SearchMedia operation to query the VideoId value in the response.
   * 
   * This parameter is required.
   * 
   * @example
   * 61ccbdb06fa83012be4d8083f6****,7d2fbc380b0e08e55f****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The list of custom IDs. Separate multiple custom IDs with commas (,). You can specify up to 20 IDs.
   * 
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

