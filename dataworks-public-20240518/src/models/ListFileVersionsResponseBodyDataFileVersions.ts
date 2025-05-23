// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListFileVersionsResponseBodyDataFileVersions extends $dara.Model {
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
   * 1593881265000
   */
  commitTime?: number;
  /**
   * @example
   * 73842342****
   */
  commitUser?: string;
  /**
   * @example
   * SHOW TABLES;
   */
  fileContent?: string;
  /**
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @example
   * {"fileName":"ods_user_info_d","fileType":10}
   */
  filePropertyContent?: string;
  /**
   * @example
   * 2
   */
  fileVersion?: number;
  /**
   * @example
   * false
   */
  isCurrentProd?: boolean;
  /**
   * @example
   * {"cycleType":0,"cronExpress":"00 05 00 * * ?"}
   */
  nodeContent?: string;
  /**
   * @example
   * 1234
   */
  nodeId?: number;
  /**
   * @example
   * COMMITTED
   */
  status?: string;
  /**
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      changeType: 'ChangeType',
      comment: 'Comment',
      commitTime: 'CommitTime',
      commitUser: 'CommitUser',
      fileContent: 'FileContent',
      fileName: 'FileName',
      filePropertyContent: 'FilePropertyContent',
      fileVersion: 'FileVersion',
      isCurrentProd: 'IsCurrentProd',
      nodeContent: 'NodeContent',
      nodeId: 'NodeId',
      status: 'Status',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      changeType: 'string',
      comment: 'string',
      commitTime: 'number',
      commitUser: 'string',
      fileContent: 'string',
      fileName: 'string',
      filePropertyContent: 'string',
      fileVersion: 'number',
      isCurrentProd: 'boolean',
      nodeContent: 'string',
      nodeId: 'number',
      status: 'string',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

