// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBsnByResourceRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123456789
   */
  aliuid?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 3097938
   */
  resourceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * alicloud_edas_application_scale
   */
  resourceType?: number;
  static names(): { [key: string]: string } {
    return {
      aliuid: 'aliuid',
      resourceId: 'resourceId',
      resourceType: 'resourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      aliuid: 'number',
      resourceId: 'string',
      resourceType: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

