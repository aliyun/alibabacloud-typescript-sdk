// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListScriptsRequest extends $dara.Model {
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * af81a389-91f0-4157-8d82-720edd02b66a
   */
  instanceId?: string;
  /**
   * @remarks
   * The scenario name.
   * 
   * @example
   * Navigation test scenario
   */
  name?: string;
  /**
   * @remarks
   * The number.
   * 
   * @example
   * 13816111993
   */
  number?: string;
  /**
   * @remarks
   * The page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The list of scenario IDs.
   */
  scriptIds?: string[];
  /**
   * @remarks
   * The status.
   * 
   * @example
   * DRAFT
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      name: 'Name',
      number: 'Number',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      scriptIds: 'ScriptIds',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      name: 'string',
      number: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      scriptIds: { 'type': 'array', 'itemType': 'string' },
      status: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.scriptIds)) {
      $dara.Model.validateArray(this.scriptIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

