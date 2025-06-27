// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeDnsGtmLogsResponseBodyLogsLog extends $dara.Model {
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
   * The ID of the object on which the operation was performed.
   * 
   * @example
   * 121212
   */
  entityId?: string;
  /**
   * @remarks
   * The name of the object on which the operation was performed.
   * 
   * @example
   * test-pool-1
   */
  entityName?: string;
  /**
   * @remarks
   * The type of the object on which the operation was performed.
   */
  entityType?: string;
  /**
   * @remarks
   * The ID of the record.
   * 
   * @example
   * 6726
   */
  id?: number;
  /**
   * @remarks
   * The operation performed.
   */
  operAction?: string;
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
   * The timestamp of the operation.
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

