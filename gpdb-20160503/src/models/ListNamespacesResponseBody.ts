// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { ListNamespacesResponseBodyNamespaces } from "./ListNamespacesResponseBodyNamespaces";


export class ListNamespacesResponseBody extends $dara.Model {
  /**
   * @remarks
   * The total number of entries returned.
   * 
   * @example
   * 1
   */
  count?: number;
  /**
   * @remarks
   * The instance ID.
   * 
   * @example
   * gp-xxxxxxxxx
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * Successful
   */
  message?: string;
  /**
   * @remarks
   * The queried namespaces.
   */
  namespaces?: ListNamespacesResponseBodyNamespaces;
  /**
   * @remarks
   * The region ID of the instance.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * ABB39CC3-4488-4857-905D-2E4A051D0521
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   **success**
   * *   **fail**
   * 
   * @example
   * success
   */
  status?: string;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      DBInstanceId: 'DBInstanceId',
      message: 'Message',
      namespaces: 'Namespaces',
      regionId: 'RegionId',
      requestId: 'RequestId',
      status: 'Status',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      DBInstanceId: 'string',
      message: 'string',
      namespaces: ListNamespacesResponseBodyNamespaces,
      regionId: 'string',
      requestId: 'string',
      status: 'string',
    };
  }

  validate() {
    if(this.namespaces && typeof (this.namespaces as any).validate === 'function') {
      (this.namespaces as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

