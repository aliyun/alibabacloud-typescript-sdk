// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyDatabaseDescriptionRequest extends $dara.Model {
  /**
   * @remarks
   * Example 1
   * 
   * This parameter is required.
   * 
   * @example
   * sms_pre
   */
  databaseName?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * this is a test database
   */
  description?: string;
  /**
   * @remarks
   * The description of the database.
   * 
   * This parameter is required.
   * 
   * @example
   * ob317v4uif****
   */
  instanceId?: string;
  /**
   * @remarks
   * The operation that you want to perform.   
   * Set the value to **ModifyDatabaseDescription**.
   * 
   * This parameter is required.
   * 
   * @example
   * ob2mr3oae0****
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      databaseName: 'DatabaseName',
      description: 'Description',
      instanceId: 'InstanceId',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      databaseName: 'string',
      description: 'string',
      instanceId: 'string',
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

