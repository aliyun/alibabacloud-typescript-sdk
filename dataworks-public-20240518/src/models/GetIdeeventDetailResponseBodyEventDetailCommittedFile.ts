// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFileFilePropertyContent";
import { GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFileNodeConfiguration";


export class GetIDEEventDetailResponseBodyEventDetailCommittedFile extends $dara.Model {
  /**
   * @remarks
   * The type of the change to the file of the current version. Valid values: CREATE, UPDATE, and DELETE.
   * 
   * @example
   * UPDATE
   */
  changeType?: string;
  /**
   * @remarks
   * The description of the file version.
   * 
   * @example
   * Second version submission
   */
  comment?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to generate the file of the current version.
   * 
   * @example
   * 7384234****
   */
  committor?: string;
  /**
   * @remarks
   * The code in the file of the current version.
   * 
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @remarks
   * The file ID.
   * 
   * @example
   * 1234123
   */
  fileId?: number;
  /**
   * @remarks
   * The name of the file.
   * 
   * @example
   * hello_dataworks.sql
   */
  fileName?: string;
  /**
   * @remarks
   * The details of the file.
   */
  filePropertyContent?: GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent;
  /**
   * @remarks
   * The file type. The code for files varies based on the file type. For more information, see [DataWorks nodes](https://help.aliyun.com/document_detail/600169.html).
   * 
   * @example
   * 10
   */
  fileType?: number;
  /**
   * @remarks
   * The scheduling properties of the node that corresponds to the file.
   */
  nodeConfiguration?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration;
  /**
   * @remarks
   * The ID of the node that is scheduled.
   * 
   * @example
   * 421429
   */
  nodeId?: number;
  /**
   * @remarks
   * The module to which the file belongs. Valid values:
   * 
   * *   NORMAL: The file is used for DataStudio.
   * *   MANUAL: The file is used for a manually triggered node.
   * *   MANUAL_BIZ: The file is used for a manually triggered workflow.
   * *   SKIP: The file is used for a dry-run node in DataStudio.
   * *   ADHOCQUERY: The file is used for an ad hoc query.
   * *   COMPONENT: The file is used for a script template.
   * 
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      comment: 'Comment',
      committor: 'Committor',
      content: 'Content',
      fileId: 'FileId',
      fileName: 'FileName',
      filePropertyContent: 'FilePropertyContent',
      fileType: 'FileType',
      nodeConfiguration: 'NodeConfiguration',
      nodeId: 'NodeId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      comment: 'string',
      committor: 'string',
      content: 'string',
      fileId: 'number',
      fileName: 'string',
      filePropertyContent: GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent,
      fileType: 'number',
      nodeConfiguration: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration,
      nodeId: 'number',
      useType: 'string',
    };
  }

  validate() {
    if(this.filePropertyContent && typeof (this.filePropertyContent as any).validate === 'function') {
      (this.filePropertyContent as any).validate();
    }
    if(this.nodeConfiguration && typeof (this.nodeConfiguration as any).validate === 'function') {
      (this.nodeConfiguration as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

