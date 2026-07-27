// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceRequestComponents extends $dara.Model {
  /**
   * @example
   * enable
   */
  status?: string;
  /**
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
   * @example
   * ETnLKlblzczshOTUbOCz****
   */
  clientToken?: string;
  components?: ModifyAppInstanceRequestComponents[];
  DBInstanceName?: string;
  instanceClass?: string;
  /**
   * @example
   * ra-8moov5lxba****
   */
  instanceName?: string;
  /**
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

