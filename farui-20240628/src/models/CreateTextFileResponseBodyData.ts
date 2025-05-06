// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class CreateTextFileResponseBodyData extends $dara.Model {
  /**
   * @example
   * 36d6447d277c4a1c9fd0def1d16341f1
   */
  textFileId?: string;
  textFileName?: string;
  textFileUrl?: string;
  static names(): { [key: string]: string } {
    return {
      textFileId: 'TextFileId',
      textFileName: 'TextFileName',
      textFileUrl: 'TextFileUrl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      textFileId: 'string',
      textFileName: 'string',
      textFileUrl: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

