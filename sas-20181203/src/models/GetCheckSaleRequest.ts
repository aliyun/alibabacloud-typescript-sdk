// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCheckSaleRequest extends $dara.Model {
  /**
   * @remarks
   * The region in which the Security Center instance is deployed. Valid values:
   * 
   * *   **cn-hangzhou:** inside China
   * *   Global **ap-southeast-1:** outside China
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
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

