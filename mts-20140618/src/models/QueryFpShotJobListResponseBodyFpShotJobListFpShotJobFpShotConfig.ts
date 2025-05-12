// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryFpShotJobListResponseBodyFpShotJobListFpShotJobFpShotConfig extends $dara.Model {
  /**
   * @remarks
   * The ID of the media fingerprint library.
   * 
   * @example
   * 2288c6ca184c0e47098a5b665e2a12****
   */
  fpDBId?: string;
  /**
   * @remarks
   * The unique primary key of the video.
   * 
   * @example
   * 3ca84a39a9024f19853b21be9cf9****
   */
  primaryKey?: string;
  /**
   * @remarks
   * The storage type. Valid values:
   * 
   * *   **nosave**: The fingerprints of the job input are not saved to the media fingerprint library.
   * *   **save**: The fingerprints of the job input are saved to the media fingerprint library only if the job input is not duplicated with media content in the media fingerprint library.
   * *   **forcesave**: The fingerprints of the job input are forcibly saved to the media fingerprint library.
   * 
   * @example
   * save
   */
  saveType?: string;
  static names(): { [key: string]: string } {
    return {
      fpDBId: 'FpDBId',
      primaryKey: 'PrimaryKey',
      saveType: 'SaveType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fpDBId: 'string',
      primaryKey: 'string',
      saveType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

