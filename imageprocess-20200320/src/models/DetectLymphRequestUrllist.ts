// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetectLymphRequestURLList extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  URL?: string;
  static names(): { [key: string]: string } {
    return {
      URL: 'URL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      URL: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

