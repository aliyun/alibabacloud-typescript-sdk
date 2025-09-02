// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDIProjectConfigResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The default global configuration of synchronization solutions. The value indicates the processing rules of different types of DDL messages. Example: {"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"WARNING","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"WARNING","DROPCOLUMN":"WARNING","ADDCOLUMN":"WARNING","RENAMETABLE":"WARNING"}
   * 
   * Field description:
   * 
   * *   RENAMECOLUMN: renames a column.
   * *   DROPTABLE: deletes a table.
   * *   CREATETABLE: creates a table.
   * *   MODIFYCOLUMN: changes the data type of a column.
   * *   TRUNCATETABLE: clears a table.
   * *   DROPCOLUMN: deletes a column.
   * *   ADDCOLUMN: creates a column.
   * *   RENAMETABLE: renames a table.
   * 
   * DataWorks processes a DDL message of a specific type based on the following rules:
   * 
   * *   WARNING: ignores the message and records an alert in real-time synchronization logs. The alert contains information about the situation that the message is ignored because of an execution error.
   * *   IGNORE: discards the message and does not send it to the destination.
   * *   CRITICAL: terminates the real-time synchronization node and sets the node status to Failed.
   * *   NORMAL: sends the message to the destination to process the message. Each destination processes DDL messages based on its own business logic. If DataWorks adopts the NORMAL policy, DataWorks only forwards DDL messages.
   * 
   * @example
   * {"RENAMECOLUMN":"WARNING","DROPTABLE":"WARNING","CREATETABLE":"WARNING","MODIFYCOLUMN":"WARNING","TRUNCATETABLE":"WARNING","DROPCOLUMN":"WARNING","ADDCOLUMN":"WARNING","RENAMETABLE":"WARNING"}
   */
  config?: string;
  static names(): { [key: string]: string } {
    return {
      config: 'Config',
    };
  }

  static types(): { [key: string]: any } {
    return {
      config: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDIProjectConfigResponseBody extends $dara.Model {
  /**
   * @remarks
   * The information about the query.
   */
  data?: ListDIProjectConfigResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 0000-ABCD-EFG
   */
  requestId?: string;
  /**
   * @remarks
   * Indicates whether the request was successful. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
      success: 'Success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: ListDIProjectConfigResponseBodyData,
      requestId: 'string',
      success: 'boolean',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

