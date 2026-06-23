// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetClusterCheckResponseBody extends $dara.Model {
  /**
   * @remarks
   * The check ID.
   * 
   * @example
   * 1697100584236600453-ce0da5a1d627e4e9e9f96cae8ad07****-clustercheck-lboto
   */
  checkId?: string;
  /**
   * @remarks
   * The check items.
   */
  checkItems?: { [key: string]: { [key: string]: any }[] };
  /**
   * @remarks
   * The creation time.
   * 
   * @example
   * 2023-10-16T08:31:20.292030178Z
   */
  createdAt?: string;
  /**
   * @remarks
   * The completion time.
   * 
   * @example
   * 2023-10-16T08:35:20.292030178Z
   */
  finishedAt?: string;
  /**
   * @remarks
   * The check status message.
   * 
   * @example
   * task succeed
   */
  message?: string;
  /**
   * @remarks
   * The check status.
   * 
   * @example
   * Succeeded
   */
  status?: string;
  /**
   * @remarks
   * The check type.
   * 
   * @example
   * ClusterUpgrade
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      checkId: 'check_id',
      checkItems: 'check_items',
      createdAt: 'created_at',
      finishedAt: 'finished_at',
      message: 'message',
      status: 'status',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      checkId: 'string',
      checkItems: { 'type': 'map', 'keyType': 'string', 'valueType': { 'type': 'array', 'itemType': { 'type': 'map', 'keyType': 'string', 'valueType': 'any' } } },
      createdAt: 'string',
      finishedAt: 'string',
      message: 'string',
      status: 'string',
      type: 'string',
    };
  }

  validate() {
    if(this.checkItems) {
      $dara.Model.validateMap(this.checkItems);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

