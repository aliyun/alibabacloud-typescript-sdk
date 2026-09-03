// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeFeatureTrialInfoRequest extends $dara.Model {
  /**
   * @remarks
   * The feature type. Currently, only the free trial information of Tablestore backup can be queried.
   * 
   * This parameter is required.
   * 
   * @example
   * OTS_BACKUP
   */
  featureType?: string;
  static names(): { [key: string]: string } {
    return {
      featureType: 'FeatureType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      featureType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

