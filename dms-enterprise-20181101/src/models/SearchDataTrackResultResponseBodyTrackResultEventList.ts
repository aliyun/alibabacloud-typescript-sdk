// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SearchDataTrackResultResponseBodyTrackResultEventList extends $dara.Model {
  /**
   * @remarks
   * The data records after you perform data operations in the database.
   */
  dataAfter?: string[];
  /**
   * @remarks
   * The data records before you perform data operations in the database.
   */
  dataBefore?: string[];
  /**
   * @remarks
   * The ID of the event.
   * 
   * @example
   * 1
   */
  eventId?: number;
  /**
   * @remarks
   * The length of the event content. Unit: bytes.
   * 
   * @example
   * 4324
   */
  eventLength?: number;
  /**
   * @remarks
   * The event time.
   * 
   * @example
   * 2023-04-23 10:25:47
   */
  eventTimestamp?: string;
  /**
   * @remarks
   * The type of the event. Valid values:
   * 
   * *   **WRITE_ROWS**: indicates an INSERT operation.
   * *   **UPDATE_ROWS**: indicates an UPDATE operation.
   * *   **DELETE_ROWS**: indicates a DELETE operation.
   * *   **EXT_WRITE_ROWS**: indicates an INSERT operation, which is equivalent to WRITE_ROWS.
   * *   **EXT_UPDATE_ROWS**: indicates an UPDATE operation, which is equivalent to UPDATE_ROWS.
   * *   **EXT_DELETE_ROWS**: indicates a DELETE operation, which is equivalent to DELETE_ROWS.
   * 
   * @example
   * UPDATE_ROWS
   */
  eventType?: string;
  /**
   * @remarks
   * The SQL statements used to roll back the data change.
   * 
   * @example
   * -- Timestamp:2023-04-23 10:25:47 #1\\r\\nUPDATE `dc_test`.`tb_chunk_dml` SET `id`=1 , `gmt_create`=\\"2021-09-30T00:00:00\\" , `content`=\\"2023-03-30 14:51:50\\" , `c1`=\\"2023-04-17 13:42:03\\" , `c_id`=1 , `c13425`=\\"b\\\\\\"\\" , `c432532535`= null , `c1432`= null , `c143243253`= null , `c1432535`= null , `c43125325`= null , `c3425325`= null WHERE  (`id`=1)"
   */
  rollSQL?: string;
  static names(): { [key: string]: string } {
    return {
      dataAfter: 'DataAfter',
      dataBefore: 'DataBefore',
      eventId: 'EventId',
      eventLength: 'EventLength',
      eventTimestamp: 'EventTimestamp',
      eventType: 'EventType',
      rollSQL: 'RollSQL',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dataAfter: { 'type': 'array', 'itemType': 'string' },
      dataBefore: { 'type': 'array', 'itemType': 'string' },
      eventId: 'number',
      eventLength: 'number',
      eventTimestamp: 'string',
      eventType: 'string',
      rollSQL: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.dataAfter)) {
      $dara.Model.validateArray(this.dataAfter);
    }
    if(Array.isArray(this.dataBefore)) {
      $dara.Model.validateArray(this.dataBefore);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

