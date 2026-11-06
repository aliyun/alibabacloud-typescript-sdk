// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class EnableCloudPermissionTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The cloud account ID.
   * 
   * This parameter is required.
   * 
   * @example
   * ac_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The permission template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cpt_mkv7rgt4d7i4u7zqtzev2mxxxx
   */
  cloudPermissionTemplateId?: string;
  /**
   * @remarks
   * The ID of the IDaaS EIAM instance.
   * 
   * This parameter is required.
   * 
   * @example
   * idaas_ue2jvisn35ea5lmthk267xxxxx
   */
  instanceId?: string;
  static names(): { [key: string]: string } {
    return {
      cloudAccountId: 'CloudAccountId',
      cloudPermissionTemplateId: 'CloudPermissionTemplateId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountId: 'string',
      cloudPermissionTemplateId: 'string',
      instanceId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

