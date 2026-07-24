// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteAnswerLibRequest extends $dara.Model {
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

