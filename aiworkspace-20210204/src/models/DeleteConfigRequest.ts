// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The classification of the configuration item. The following classifications are supported:
   * 
   * - DLCAutoRecycle: The DLC automatic release configuration.
   * 
   * - DLCPriorityConfig: The DLC priority settings.
   * 
   * - DSWPriorityConfig: The DSW priority settings.
   * 
   * - QuotaMaximumDuration: The maximum runtime configuration of a DLC task for a quota.
   * 
   * - CommonTagConfig: The tag settings.
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The filter conditions. Separate multiple conditions with commas. The conditions are combined with a logical AND.
   * 
   * @example
   * key1=value;key2=value2
   */
  labels?: string;
  static names(): { [key: string]: string } {
    return {
      categoryName: 'CategoryName',
      labels: 'Labels',
    };
  }

  static types(): { [key: string]: any } {
    return {
      categoryName: 'string',
      labels: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

