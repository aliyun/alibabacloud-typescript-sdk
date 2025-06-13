// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExportAnswerSampleRequest extends $dara.Model {
  /**
   * @example
   * alxxx
   */
  libId?: string;
  /**
   * @example
   * cn-shanghai
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      libId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

