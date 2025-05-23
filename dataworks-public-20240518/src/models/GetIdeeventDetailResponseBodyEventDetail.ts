// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetailCommittedFile } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFile";
import { GetIDEEventDetailResponseBodyEventDetailDeletedFile } from "./GetIdeeventDetailResponseBodyEventDetailDeletedFile";
import { GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand } from "./GetIdeeventDetailResponseBodyEventDetailFileExecutionCommand";
import { GetIDEEventDetailResponseBodyEventDetailTableModel } from "./GetIdeeventDetailResponseBodyEventDetailTableModel";


export class GetIDEEventDetailResponseBodyEventDetail extends $dara.Model {
  committedFile?: GetIDEEventDetailResponseBodyEventDetailCommittedFile;
  deletedFile?: GetIDEEventDetailResponseBodyEventDetailDeletedFile;
  fileExecutionCommand?: GetIDEEventDetailResponseBodyEventDetailFileExecutionCommand;
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

