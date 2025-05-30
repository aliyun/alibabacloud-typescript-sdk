// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetProjectResponseBodyDataSaleTag extends $dara.Model {
  /**
   * @remarks
   * The instance ID of the default computing quota.
   * 
   * @example
   * project_name
   */
  resourceId?: string;
  /**
   * @remarks
   * The billing method of the default computing quota.
   * 
   * @example
   * project
   */
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      resourceId: 'string',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

