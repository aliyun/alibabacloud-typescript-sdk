// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AuditLogExportRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the exported file. The name can be up to 1,024 characters in length. The default name suffix is log.csv.
   * 
   * @example
   * 2024-01-log.csv
   */
  fileName?: string;
  /**
   * @remarks
   * The export language. Default value: zh-CN. Valid values:
   * 
   * *   zh-CN: Chinese
   * *   en_US: English
   * 
   * @example
   * zh_CN
   */
  language?: string;
  /**
   * @remarks
   * The sort order based on the operation time. If you leave this parameter empty, the value acted_at DESC is used. Valid values:
   * 
   * *   acted_at DESC: sorts the entries by operation time in descending order
   * *   acted_at ASC: sorts the entries by operation time in ascending order
   * 
   * @example
   * acted_at DESC
   */
  orderBy?: string;
  /**
   * @remarks
   * The fields used for query. You can specify one or more of the following fields:
   * 
   * *   drive_id (space ID, in the form of a string)
   * *   actor_id (operator ID, in the form of a string)
   * *   acted_at (operation time, in the yyyy-MM-ddTHH:mm:ssZ format in UTC, for example, 2006-01-02T00:00:00)
   * *   action_type (operation type, in the form of a string)
   * 
   * @example
   * acted_at > \\"2025-03-10T16:00:00\\" and acted_at < \\"2025-03-17T15:59:59\\"
   */
  query?: string;
  static names(): { [key: string]: string } {
    return {
      fileName: 'file_name',
      language: 'language',
      orderBy: 'order_by',
      query: 'query',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileName: 'string',
      language: 'string',
      orderBy: 'string',
      query: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

