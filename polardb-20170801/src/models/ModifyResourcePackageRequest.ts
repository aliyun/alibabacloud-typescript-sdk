// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyResourcePackageRequest extends $dara.Model {
  /**
   * @remarks
   * Indicates whether to enable automatic quotas.
   * 
   * @example
   * true
   */
  autoQuota?: boolean;
  /**
   * @remarks
   * The ID of the cross-cloud resource plan.
   * 
   * This parameter is required.
   * 
   * @example
   * pm-bp11b0i9389******
   */
  resourcePackageId?: string;
  static names(): { [key: string]: string } {
    return {
      autoQuota: 'AutoQuota',
      resourcePackageId: 'ResourcePackageId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      autoQuota: 'boolean',
      resourcePackageId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

