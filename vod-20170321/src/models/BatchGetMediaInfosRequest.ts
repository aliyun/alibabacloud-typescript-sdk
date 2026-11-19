// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchGetMediaInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The media asset IDs, namely the audio or video IDs (VideoId). Separate multiple IDs with commas (,). A maximum of 20 IDs are supported. You can obtain the IDs by using one of the following methods:
   * 
   * - For audio or video files uploaded through the console, log on to the ApsaraVideo VOD console and choose Media Library > Audio/Video to view the audio or video IDs.
   * - When you call the operation to obtain the upload URL and credential for an audio or video file, the ID is the value of the VideoId response parameter.
   * - After an audio or video file is uploaded, you can call the operation to search for media asset information. The ID is the value of the VideoId response parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * 61ccbdb06fa83012be4d8083f6****,7d2fbc380b0e08e55f****
   */
  mediaIds?: string;
  /**
   * @remarks
   * The custom ID list. It consists of one or more custom IDs. Separate multiple IDs with commas (,). A maximum of 20 IDs are supported.
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

