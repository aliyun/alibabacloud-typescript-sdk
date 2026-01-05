// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SlotStatusDetail extends $dara.Model {
  /**
   * @example
   * 1000000
   */
  loadedFileNum?: number;
  /**
   * @example
   * 200G
   */
  loadedFileSize?: string;
  /**
   * @example
   * 1800000
   */
  loadingTimeCost?: number;
  static names(): { [key: string]: string } {
    return {
      loadedFileNum: 'LoadedFileNum',
      loadedFileSize: 'LoadedFileSize',
      loadingTimeCost: 'LoadingTimeCost',
    };
  }

  static types(): { [key: string]: any } {
    return {
      loadedFileNum: 'number',
      loadedFileSize: 'string',
      loadingTimeCost: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

