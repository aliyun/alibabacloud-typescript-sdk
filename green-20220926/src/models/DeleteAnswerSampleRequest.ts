// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAnswerSampleRequest extends $dara.Model {
  /**
   * @example
   * [15463605]
   */
  ids?: string;
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
      ids: 'Ids',
      libId: 'LibId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ids: 'string',
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

