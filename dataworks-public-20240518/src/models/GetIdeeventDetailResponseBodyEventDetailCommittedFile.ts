// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFileFilePropertyContent";
import { GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration } from "./GetIdeeventDetailResponseBodyEventDetailCommittedFileNodeConfiguration";


export class GetIDEEventDetailResponseBodyEventDetailCommittedFile extends $dara.Model {
  /**
   * @example
   * UPDATE
   */
  changeType?: string;
  /**
   * @example
   * Second version submission
   */
  comment?: string;
  /**
   * @example
   * 7384234****
   */
  committor?: string;
  /**
   * @example
   * SHOW TABLES;
   */
  content?: string;
  /**
   * @example
   * 1234123
   */
  fileId?: number;
  /**
   * @example
   * hello_dataworks.sql
   */
  fileName?: string;
  filePropertyContent?: GetIDEEventDetailResponseBodyEventDetailCommittedFileFilePropertyContent;
  /**
   * @example
   * 10
   */
  fileType?: number;
  nodeConfiguration?: GetIDEEventDetailResponseBodyEventDetailCommittedFileNodeConfiguration;
  /**
   * @example
   * 421429
   */
  nodeId?: number;
  /**
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

