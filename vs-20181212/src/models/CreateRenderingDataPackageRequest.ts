// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateRenderingDataPackageRequest extends $dara.Model {
  category?: string;
  /**
   * @example
   * testdescription
   */
  description?: string;
  instanceBillingCycle?: string;
  /**
   * @remarks
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

