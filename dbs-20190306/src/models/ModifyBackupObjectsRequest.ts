// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyBackupObjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The backup objects that are defined in a JSON string in the following format:
   * 
   *     [
   *         {
   *             "DBName":"The name of the database that you want to back up",
   *             "SchemaName":"The name of the schema that you want to back up",
   *             "TableIncludes":[{
   *             	"TableName":"The name of the table that you want to back up"
   *             }],
   *             "TableExcludes":[{
   *                 "TableName":"The name of the table that you want to exclude during the backup"
   *             }]
   *         }
   *     ]
   * 
   * *   If you specify only `DBName` and do not specify objects of lower levels, all objects in the database are backed up.
   * 
   * *   If you specify `DBName` and some objects of lower levels, only the specified objects are backed up by default. You can use the following regular expressions to define object names:
   * 
   *     *   A period `.` matches any single character except `\\r\\n`.
   *     *   An asterisk `*` matches zero or more occurrences of a preceding subexpression. For example, `h.*llo` matches strings such as `hllo` and `heeeello`.
   *     *   A question mark `?` matches zero or one occurrence of a preceding subexpression. For example, `h.?llo` matches strings such as `hllo` and `hello`, but not `haello`.
   *     *   Character set `[Characters]` matches a character included in the brackets ([ ]). For example, `h[ae]llo` matches `hallo` and `hello`.
   *     *   Negative character set `[^Characters]` does not match a character in the brackets ([ ]). For example, `h[^ae]llo` matches `hcllo` and `hdllo`, but not `hallo` or `hello`.
   *     *   Character range `[character1-character2]` matches any character included in the range from `character1 to character2`, such as `[0-9]` and `[a-z]`.
   * 
   * >  `SchemaName` and `NewSchemaName` apply only to SQL Server databases. Use `DBName` and `NewDBName` to specify the names of other databases.
   * 
   * This parameter is required.
   * 
   * @example
   * [     {         "DBName":"17xxx92xxxx374",         "SchemaName":"gy9xnj8xxxxxx",         "TableIncludes":[{         	"TableName":"test1"         }],         "TableExcludes":[{             "TableName":"test2"         }]     } ]
   */
  backupObjects?: string;
  /**
   * @remarks
   * The ID of the backup schedule.
   * 
   * This parameter is required.
   * 
   * @example
   * dbs1h****usfa
   */
  backupPlanId?: string;
  /**
   * @remarks
   * The client token that is used to ensure the idempotence of the request.
   * 
   * @example
   * ETnLKlblzczshOTUbOCzxxxxxxx
   */
  clientToken?: string;
  ownerId?: string;
  static names(): { [key: string]: string } {
    return {
      backupObjects: 'BackupObjects',
      backupPlanId: 'BackupPlanId',
      clientToken: 'ClientToken',
      ownerId: 'OwnerId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      backupObjects: 'string',
      backupPlanId: 'string',
      clientToken: 'string',
      ownerId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

