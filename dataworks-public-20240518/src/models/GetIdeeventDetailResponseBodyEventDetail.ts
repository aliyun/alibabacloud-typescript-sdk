// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetailCommittedFile } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFile";
import { GetIDEEventDetailResponseBodyEventDetailDeletedFile } from "./GetIdeeventDetailResponseBodyEventDetailDeletedFile";
import { GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand } from "./GetIdeeventDetailResponseBodyEventDetailFileExecutionCommand";
import { GetIDEEventDetailResponseBodyEventDetailTableModel } from "./GetIdeeventDetailResponseBodyEventDetailTableModel";


export class GetIDEEventDetailResponseBodyEventDetail extends $dara.Model {
  /**
   * @remarks
   * The data snapshot when the file is committed and deployed.
   * 
   * This parameter is valid only if the message type is IDE_FILE_SUBMIT_BEFORE or IDE_FILE_DEPLOY_BEFORE.
   */
  committedFile?: GetIDEEventDetailResponseBodyEventDetailCommittedFile;
  /**
   * @remarks
   * The data snapshot when the file is deleted. This parameter is valid only if the message type is IDE_FILE_DELETE_BEFORE.
   */
  deletedFile?: GetIDEEventDetailResponseBodyEventDetailDeletedFile;
  /**
   * @remarks
   * The data snapshot when the code in the file is run. This parameter is valid only if the message type is IDE_FILE_EXECUTE_BEFORE.
   */
  fileExecutionCommand?: GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand;
  /**
   * @remarks
   * The data snapshot when the table is committed and deployed. This parameter is valid only if the message type is IDE_TABLE_SUBMIT_BEFORE or IDE_TABLE_DEPLOY_BEFORE.
   */
  tableModel?: GetIDEEventDetailResponseBodyEventDetailTableModel;
  static names(): { [key: string]: string } {
    return {
      committedFile: 'CommittedFile',
      deletedFile: 'DeletedFile',
      fileExecutionCommand: 'FileExecutionCommand',
      tableModel: 'TableModel',
    };
  }

  static types(): { [key: string]: any } {
    return {
      committedFile: GetIDEEventDetailResponseBodyEventDetailCommittedFile,
      deletedFile: GetIDEEventDetailResponseBodyEventDetailDeletedFile,
      fileExecutionCommand: GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand,
      tableModel: GetIDEEventDetailResponseBodyEventDetailTableModel,
    };
  }

  validate() {
    if(this.committedFile && typeof (this.committedFile as any).validate === 'function') {
      (this.committedFile as any).validate();
    }
    if(this.deletedFile && typeof (this.deletedFile as any).validate === 'function') {
      (this.deletedFile as any).validate();
    }
    if(this.fileExecutionCommand && typeof (this.fileExecutionCommand as any).validate === 'function') {
      (this.fileExecutionCommand as any).validate();
    }
    if(this.tableModel && typeof (this.tableModel as any).validate === 'function') {
      (this.tableModel as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

