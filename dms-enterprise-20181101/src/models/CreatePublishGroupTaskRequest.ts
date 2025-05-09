// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreatePublishGroupTaskRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the database for which the schema design is executed.
   * 
   * This parameter is required.
   * 
   * @example
   * 12345
   */
  dbId?: number;
  /**
   * @remarks
   * Indicates whether the database is a logical database.
   * 
   * This parameter is required.
   * 
   * @example
   * false
   */
  logic?: boolean;
  /**
   * @remarks
   * The ID of the ticket.
   * 
   * > : You can create a schema design ticket in the DMS console. For more information, see [Design schemas](https://help.aliyun.com/document_detail/69711.html). You can also create a schema design ticket by calling the [CreateOrder](https://help.aliyun.com/document_detail/144649.html) operation and obtain the ticket ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 142435
   */
  orderId?: number;
  /**
   * @remarks
   * The time to execute the schema design ticket.
   * 
   * @example
   * 2019-10-10 00:00:00
   */
  planTime?: string;
  /**
   * @remarks
   * The policy to execute the schema design ticket. Valid values:
   * 
   * *   IMMEDIATELY: immediately executes the schema design ticket.
   * *   REGULARLY: executes the schema design ticket at a scheduled time.
   * 
   * This parameter is required.
   * 
   * @example
   * IMMEDIATELY
   */
  publishStrategy?: string;
  /**
   * @remarks
   * The ID of the tenant.
   * 
   * > : To view the ID of the tenant, log on to the Data Management (DMS) console and move the pointer over the profile picture in the upper-right corner. For more information, see [Manage DMS tenants](https://help.aliyun.com/document_detail/181330.html).
   * 
   * @example
   * -1
   */
  tid?: number;
  static names(): { [key: string]: string } {
    return {
      dbId: 'DbId',
      logic: 'Logic',
      orderId: 'OrderId',
      planTime: 'PlanTime',
      publishStrategy: 'PublishStrategy',
      tid: 'Tid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbId: 'number',
      logic: 'boolean',
      orderId: 'number',
      planTime: 'string',
      publishStrategy: 'string',
      tid: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

