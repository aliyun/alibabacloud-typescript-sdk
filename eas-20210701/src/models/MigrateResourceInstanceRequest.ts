// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrateResourceInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the destination resource group.
   * 
   * This parameter is required.
   * 
   * @example
   * eas-r-asdasdasd****
   */
  destResourceId?: string;
  /**
   * @remarks
   * The instance ID.
   * 
   * This parameter is required.
   */
  instanceIds?: string[];
  migrateToHybrid?: boolean;
  static names(): { [key: string]: string } {
    return {
      destResourceId: 'DestResourceId',
      instanceIds: 'InstanceIds',
      migrateToHybrid: 'MigrateToHybrid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      destResourceId: 'string',
      instanceIds: { 'type': 'array', 'itemType': 'string' },
      migrateToHybrid: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.instanceIds)) {
      $dara.Model.validateArray(this.instanceIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

