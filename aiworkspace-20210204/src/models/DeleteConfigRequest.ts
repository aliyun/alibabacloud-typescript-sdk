// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The category of the configuration item. Valid values:
   * 
   * *   CommonResourceConfig
   * *   DLCAutoRecycle - DLCPriorityConfig
   * *   DSWPriorityConfig
   * *   QuotaMaximumDuration
   * *   CommonTagConfig
   * 
   * @example
   * CommonResourceConfig
   */
  categoryName?: string;
  /**
   * @remarks
   * The filter conditions. Separate multiple conditions with commas (,). The conditions have an AND relationship.
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

