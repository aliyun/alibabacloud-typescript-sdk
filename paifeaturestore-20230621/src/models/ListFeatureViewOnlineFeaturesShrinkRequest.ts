// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureViewOnlineFeaturesShrinkRequest extends $dara.Model {
  /**
   * @example
   * {"dlrm_hstu": true}
   */
  config?: string;
  /**
   * @remarks
   * The join IDs used to retrieve online features.
   * 
   * This parameter is required.
   */
  joinIdsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      joinIdsShrink: 'JoinIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      joinIdsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

