// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingDataPackageRequest extends $dara.Model {
  /**
   * @remarks
   * The data type. Valid values:
   * - Package (default)
   * - Baseline
   * 
   * @example
   * Package
   */
  category?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * testdescription
   */
  description?: string;
  /**
   * @remarks
   * The billing type. Valid values:
   * 
   * - Hour: hourly.
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * The instance ID of the Cloud Application Service. Note: This operation applies only to crs.cp.* series instance types.
   * 
   * This parameter is required.
   * 
   * @example
   * render-9f8c57355d224ad7beaf95e145f22111
   */
  renderingInstanceId?: string;
  static names(): { [key: string]: string } {
    return {
      category: 'Category',
      description: 'Description',
      instanceBillingCycle: 'InstanceBillingCycle',
      renderingInstanceId: 'RenderingInstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      category: 'string',
      description: 'string',
      instanceBillingCycle: 'string',
      renderingInstanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

