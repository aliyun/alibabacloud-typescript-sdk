// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetCloudAccountResourceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123456789012xxxx
   */
  cloudAccountId?: string;
  /**
   * @remarks
   * The ID of the cloud account resource.
   * 
   * This parameter is required.
   * 
   * @example
   * car_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  cloudAccountResourceId?: string;
  /**
   * @remarks
   * The instance ID.
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
      cloudAccountResourceId: 'CloudAccountResourceId',
      instanceId: 'InstanceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      cloudAccountId: 'string',
      cloudAccountResourceId: 'string',
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

