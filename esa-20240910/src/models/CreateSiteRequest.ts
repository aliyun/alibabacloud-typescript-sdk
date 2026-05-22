// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSiteRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  accessType?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  coverage?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  instanceId?: string;
  resourceGroupId?: string;
  /**
   * @remarks
   * 记录名称
   * 
   * This parameter is required.
   */
  siteName?: string;
  static names(): { [key: string]: string } {
    return {
      accessType: 'AccessType',
      coverage: 'Coverage',
      instanceId: 'InstanceId',
      resourceGroupId: 'ResourceGroupId',
      siteName: 'SiteName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessType: 'string',
      coverage: 'string',
      instanceId: 'string',
      resourceGroupId: 'string',
      siteName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

