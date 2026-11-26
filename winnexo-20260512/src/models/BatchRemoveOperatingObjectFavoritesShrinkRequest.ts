// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class BatchRemoveOperatingObjectFavoritesShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The platform application token issued by the console. If provided, the operation is executed as the user specified by opsUserId or opsUserCode.
   * 
   * @example
   * wn_app_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
   */
  appToken?: string;
  /**
   * @remarks
   * The graph name.
   * 
   * This parameter is required.
   * 
   * @example
   * crm
   */
  graphName?: string;
  /**
   * @remarks
   * The list of business IDs for the primary objects.
   * 
   * This parameter is required.
   * 
   * @example
   * contract-001
   */
  objectIdsShrink?: string;
  /**
   * @remarks
   * The object type, such as customer. This parameter has a value when type is set to mention.
   * 
   * This parameter is required.
   * 
   * @example
   * contract
   */
  objectType?: string;
  /**
   * @remarks
   * The operating object name.
   * 
   * This parameter is required.
   * 
   * @example
   * customer_assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The proxy user code, which is unique within the tenant. This parameter is used only when the application credential is configured as source_uid.
   * 
   * @example
   * alice
   */
  opsUserCode?: string;
  /**
   * @remarks
   * The proxy user ID, which is the WINNEXO platform user ID. This parameter is used only when the application credential is configured as winnexo_uid.
   * 
   * @example
   * 10001
   */
  opsUserId?: string;
  /**
   * @remarks
   * The tenant ID. This is a common parameter. For winnexo-cli, it is explicitly passed by using the --tenant-id option.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      appToken: 'appToken',
      graphName: 'graphName',
      objectIdsShrink: 'objectIds',
      objectType: 'objectType',
      operatingObjectName: 'operatingObjectName',
      opsUserCode: 'opsUserCode',
      opsUserId: 'opsUserId',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appToken: 'string',
      graphName: 'string',
      objectIdsShrink: 'string',
      objectType: 'string',
      operatingObjectName: 'string',
      opsUserCode: 'string',
      opsUserId: 'string',
      tenantId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

