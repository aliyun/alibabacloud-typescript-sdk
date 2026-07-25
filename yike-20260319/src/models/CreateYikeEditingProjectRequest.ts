// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateYikeEditingProjectRequest extends $dara.Model {
  /**
   * @remarks
   * The cover URL of the cloud editing project.
   * 
   * @example
   * https://example.com/example.png
   */
  coverURL?: string;
  /**
   * @remarks
   * The materials associated with the project. Separate multiple materials with commas (,). A maximum of 10 material IDs are supported for each type.
   * 
   * @example
   * {"video":"*****2e057304fcd9b145c5cafc*****", "image":"****8021a8d493da643c8acd98*****,*****cb6307a4edea614d8b3f3c*****", "liveStream": "rtmp://domain.com/app/stream", "editingProject": "xxxxx"}
   */
  materialMaps?: string;
  /**
   * @remarks
   * The timeline of the cloud editing project in JSON format.
   * 
   * @example
   * {"VideoTracks":[{"VideoTrackClips":[{"MediaId":"****4d7cf14dc7b83b0e801c****"},{"MediaId":"****4d7cf14dc7b83b0e801c****"}]}]}
   */
  timeline?: string;
  /**
   * @remarks
   * The title of the cloud editing project.
   * 
   * This parameter is required.
   * 
   * @example
   * example
   */
  title?: string;
  static names(): { [key: string]: string } {
    return {
      coverURL: 'CoverURL',
      materialMaps: 'MaterialMaps',
      timeline: 'Timeline',
      title: 'Title',
    };
  }

  static types(): { [key: string]: any } {
    return {
      coverURL: 'string',
      materialMaps: 'string',
      timeline: 'string',
      title: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

