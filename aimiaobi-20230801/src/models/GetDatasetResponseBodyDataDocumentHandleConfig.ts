// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetDatasetResponseBodyDataDocumentHandleConfig extends $dara.Model {
  /**
   * @example
   * true
   */
  disableHandleMultimodalMedia?: boolean;
  static names(): { [key: string]: string } {
    return {
      disableHandleMultimodalMedia: 'DisableHandleMultimodalMedia',
    };
  }

  static types(): { [key: string]: any } {
    return {
      disableHandleMultimodalMedia: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

