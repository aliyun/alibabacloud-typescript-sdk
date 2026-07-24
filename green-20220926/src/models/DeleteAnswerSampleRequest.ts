// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAnswerSampleRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the proxy answers to delete.
   * 
   * @example
   * [15463605]
   */
  ids?: string;
  /**
   * @remarks
   * The ID of the proxy answer library.
   * 
   * @example
   * alxxx
   */
  libId?: string;
  /**
   * @remarks
   * The region ID.
   * 
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

