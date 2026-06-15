// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFeatureViewOnlineFeaturesRequest extends $dara.Model {
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
  joinIds?: string[];
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
      joinIds: 'JoinIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
      joinIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.joinIds)) {
      $dara.Model.validateArray(this.joinIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

