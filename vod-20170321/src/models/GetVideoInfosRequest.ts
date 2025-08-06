// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetVideoInfosRequest extends $dara.Model {
  /**
   * @remarks
   * The list of video IDs. Separate multiple IDs with commas (,). A maximum of 20 IDs can be specified.
   * 
   * This parameter is required.
   * 
   * @example
   * 7753d144efd8e649c6c45fe0579****,7753d144efd74d6c45fe0570****
   */
  videoIds?: string;
  static names(): { [key: string]: string } {
    return {
      videoIds: 'VideoIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      videoIds: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

