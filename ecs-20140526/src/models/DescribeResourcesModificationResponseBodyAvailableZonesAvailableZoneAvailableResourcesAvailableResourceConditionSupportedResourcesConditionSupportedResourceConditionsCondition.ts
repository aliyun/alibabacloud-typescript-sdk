// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeResourcesModificationResponseBodyAvailableZonesAvailableZoneAvailableResourcesAvailableResourceConditionSupportedResourcesConditionSupportedResourceConditionsCondition extends $dara.Model {
  /**
   * @remarks
   * The condition name. Valid value:
   * 
   * DiskCategory, which indicates a disk category change.
   * 
   * @example
   * DiskCategory
   */
  key?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

