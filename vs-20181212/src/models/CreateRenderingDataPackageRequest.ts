// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingDataPackageRequest extends $dara.Model {
  /**
   * @remarks
   * Data type. Valid values:
   * 
   * - Package (default value).
   * 
   * - Baseline.
   * 
   * @example
   * Package
   */
  category?: string;
  /**
   * @remarks
   * Description.
   * 
   * @example
   * testdescription
   */
  description?: string;
  /**
   * @remarks
   * Billing type. Valid values:
   * 
   * - Hour: Hour.
   * 
   * @example
   * Hour
   */
  instanceBillingCycle?: string;
  /**
   * @remarks
   * Cloud application service instance ID (Note: This operation is only for crs.cp.\\* series instance types.)
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

