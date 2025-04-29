// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TripTaskQueryResponseBodyModuleRecordTasks extends $dara.Model {
  /**
   * @example
   * 123
   */
  actioner?: string;
  attributes?: string;
  /**
   * @example
   * 1525104000
   */
  gmtCreate?: number;
  /**
   * @example
   * 1525104000
   */
  gmtFinished?: number;
  /**
   * @example
   * 34360
   */
  id?: number;
  /**
   * @example
   * 575003
   */
  nodeId?: string;
  /**
   * @example
   * agree
   */
  outResult?: string;
  /**
   * @example
   * 123
   */
  owner?: string;
  /**
   * @example
   * RUNNING
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      actioner: 'actioner',
      attributes: 'attributes',
      gmtCreate: 'gmt_create',
      gmtFinished: 'gmt_finished',
      id: 'id',
      nodeId: 'node_id',
      outResult: 'out_result',
      owner: 'owner',
      status: 'status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actioner: 'string',
      attributes: 'string',
      gmtCreate: 'number',
      gmtFinished: 'number',
      id: 'number',
      nodeId: 'string',
      outResult: 'string',
      owner: 'string',
      status: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

