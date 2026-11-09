// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDeviceCredentialClientIdRequest extends $dara.Model {
  /**
   * @remarks
   * Group ID of the MQTT version of the micro message queue.
   * 
   * This parameter is required.
   * 
   * @example
   * GID_xxx
   */
  groupId?: string;
  /**
   * @remarks
   * The ID of the Cloud Message Queue MQTT version instance, which must match the actual instance ID used by the client. You can obtain this ID from the **Instance Details** page in the console.
   * 
   * This parameter is required.
   * 
   * @example
   * mqtt-xxxxxxxx
   */
  instanceId?: string;
  /**
   * @remarks
   * Token for starting the next page query.
   * 
   * @example
   * FFdXXXXXWa
   */
  nextToken?: string;
  /**
   * @remarks
   * Indicates the page number of the returned results. The starting page is counted from 1.
   * 
   * @example
   * 1
   */
  pageNo?: string;
  /**
   * @remarks
   * The maximum number of query records to display per page.
   * Value range: 1 to 100.
   * 
   * This parameter is required.
   * 
   * @example
   * 100
   */
  pageSize?: string;
  static names(): { [key: string]: string } {
    return {
      groupId: 'GroupId',
      instanceId: 'InstanceId',
      nextToken: 'NextToken',
      pageNo: 'PageNo',
      pageSize: 'PageSize',
    };
  }

  static types(): { [key: string]: any } {
    return {
      groupId: 'string',
      instanceId: 'string',
      nextToken: 'string',
      pageNo: 'string',
      pageSize: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

