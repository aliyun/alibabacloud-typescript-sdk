// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceRequestComponents extends $dara.Model {
  /**
   * @remarks
   * The module status.
   * 
   * @example
   * enable
   */
  status?: string;
  /**
   * @remarks
   * The module type.
   * 
   * @example
   * supabase
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      status: 'Status',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ModifyAppInstanceRequest extends $dara.Model {
  branchName?: string;
  /**
   * @remarks
   * The idempotency parameter.
   * 
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  /**
   * @remarks
   * The list of modules.
   */
  components?: ModifyAppInstanceRequestComponents[];
  DBInstanceName?: string;
  instanceClass?: string;
  /**
   * @remarks
   * The instance ID of the AI application.
   * 
   * @example
   * ra-8moov5lxba****
   */
  instanceName?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      clientToken: 'ClientToken',
      components: 'Components',
      DBInstanceName: 'DBInstanceName',
      instanceClass: 'InstanceClass',
      instanceName: 'InstanceName',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      clientToken: 'string',
      components: { 'type': 'array', 'itemType': ModifyAppInstanceRequestComponents },
      DBInstanceName: 'string',
      instanceClass: 'string',
      instanceName: 'string',
      regionId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.components)) {
      $dara.Model.validateArray(this.components);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

