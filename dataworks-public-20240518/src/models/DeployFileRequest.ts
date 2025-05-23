// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeployFileRequest extends $dara.Model {
  /**
   * @example
   * First release task
   */
  comment?: string;
  /**
   * @example
   * 10000001
   */
  fileId?: number;
  /**
   * @example
   * 2000001
   */
  nodeId?: number;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      comment: 'Comment',
      fileId: 'FileId',
      nodeId: 'NodeId',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      comment: 'string',
      fileId: 'number',
      nodeId: 'number',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

