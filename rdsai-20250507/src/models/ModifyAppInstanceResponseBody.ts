// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppInstanceResponseBodyComponents extends $dara.Model {
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

export class ModifyAppInstanceResponseBody extends $dara.Model {
  branchName?: string;
  /**
   * @remarks
   * The list of modules.
   */
  components?: ModifyAppInstanceResponseBodyComponents[];
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
   * Id of the request
   * 
   * @example
   * FE9C65D7-930F-57A5-A207-8C396329****
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      branchName: 'BranchName',
      components: 'Components',
      instanceName: 'InstanceName',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      branchName: 'string',
      components: { 'type': 'array', 'itemType': ModifyAppInstanceResponseBodyComponents },
      instanceName: 'string',
      requestId: 'string',
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

