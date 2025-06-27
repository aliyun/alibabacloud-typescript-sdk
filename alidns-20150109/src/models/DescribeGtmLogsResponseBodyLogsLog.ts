// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeGtmLogsResponseBodyLogsLog extends $dara.Model {
  /**
   * @remarks
   * The formatted message content.
   * 
   * @example
   * addtest-pool-1
   */
  content?: string;
  /**
   * @remarks
   * The ID of the object that was operated on.
   * 
   * @example
   * 121212
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the object that was operated on.
   * 
   * @example
   * test-pool-1
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the object that was operated on.
   * 
   * @example
   * POOL
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the log record.
   * 
   * @example
   * 6726
   */
  id?: number;
  /**
   * @remarks
   * The operation performed.
   * 
   * @example
   * add
   */
  operAction?: string;
  /**
   * @remarks
   * The IP address subject to the operation.
   * 
   * @example
   * 106.11.34.X
   */
  operIp?: string;
  /**
   * @remarks
   * The time when the operation was performed.
   * 
   * @example
   * 2018-01-24T07:35Z
   */
  operTime?: string;
  /**
   * @remarks
   * A timestamp that indicates the time when the operation was performed.
   * 
   * @example
   * 1516779348000
   */
  operTimestamp?: number;
  static names(): { [key: string]: string } {
    return {
      content: 'Content',
      entityId: 'EntityId',
      entityName: 'EntityName',
      entityType: 'EntityType',
      id: 'Id',
      operAction: 'OperAction',
      operIp: 'OperIp',
      operTime: 'OperTime',
      operTimestamp: 'OperTimestamp',
    };
  }

  static types(): { [key: string]: any } {
    return {
      content: 'string',
      entityId: 'string',
      entityName: 'string',
      entityType: 'string',
      id: 'number',
      operAction: 'string',
      operIp: 'string',
      operTime: 'string',
      operTimestamp: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

