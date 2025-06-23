// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyFullLogTtlRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs in Resource Management. This parameter is empty by default, which indicates that the instance belongs to the default resource group.
   * 
   * @example
   * default
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * The log storage duration of a website. Valid values: **7** to **180**. Unit: days.
   * 
   * This parameter is required.
   * 
   * @example
   * 30
   */
  ttl?: number;
  static names(): { [key: string]: string } {
    return {
      resourceGroupId: 'ResourceGroupId',
      ttl: 'Ttl',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceGroupId: 'string',
      ttl: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

