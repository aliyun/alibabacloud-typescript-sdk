// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListJobResponseBodyJobListJobOutputSubtitleConfigSubtitleListSubtitle extends $dara.Model {
  /**
   * @remarks
   * The sequence number of the video stream. The sequence number is the index of the video stream in the list and starts from 0. If you do not set the corresponding parameter in the request, the default video stream is selected.
   * 
   * @example
   * 0
   */
  map?: string;
  static names(): { [key: string]: string } {
    return {
      map: 'Map',
    };
  }

  static types(): { [key: string]: any } {
    return {
      map: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

