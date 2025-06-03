// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetFileVersionResponseBodyData extends $dara.Model {
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
   * The time when the file version was generated. This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
   * 
   * @example
   * 1593881265000
   */
  commitTime?: number;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account that is used to generate the file of the current version.
   * 
   * @example
   * 7384234****
   */
  commitUser?: string;
  /**
   * @remarks
   * The code in the file of the current version.
   * 
   * @example
   * SHOW TABLES;
   */
  fileContent?: string;
  /**
   * @remarks
   * The name of the file of the current version.
   * 
   * @example
   * ods_user_info_d
   */
  fileName?: string;
  /**
   * @remarks
   * The basic information about the file of the current version.
   * 
   * @example
   * {"fileName":"ods_user_info_d","fileType":10}
   */
  filePropertyContent?: string;
  /**
   * @remarks
   * The file version.
   * 
   * @example
   * 2
   */
  fileVersion?: number;
  /**
   * @remarks
   * Indicates whether the version is the latest version in the production environment. Valid values:
   * 
   * *   true
   * *   false
   * 
   * @example
   * true
   */
  isCurrentProd?: boolean;
  /**
   * @remarks
   * The scheduling configurations of the node that corresponds to the file of the current version.
   * 
   * @example
   * {"cycleType":0,"cronExpress":"00 05 00 * * ?"}
   */
  nodeContent?: string;
  /**
   * @remarks
   * The ID of the node that corresponds to the file version.
   * 
   * @example
   * 3000001
   */
  nodeId?: number;
  /**
   * @remarks
   * The status of the file version. Valid values:
   * 
   * *   COMMITTING
   * *   COMMITTED or CHECK_OK
   * *   PACKAGED
   * *   DEPLOYING
   * *   DEPLOYED
   * *   CANCELLED
   * 
   * @example
   * COMMITTED
   */
  status?: string;
  /**
   * @remarks
   * The module to which the file belongs. Valid values:
   * 
   * *   0: NORMAL, which indicates that the file is used for DataStudio.
   * *   1: MANUAL, which indicates that the file is used for a manually triggered node.
   * *   2: MANUAL_BIZ, which indicates that the file is used for a manually triggered workflow.
   * *   3: SKIP, which indicates that the file is used for a dry-run node in DataStudio.
   * *   10: ADHOCQUERY, which indicates that the file is used for an ad hoc query.
   * *   30: COMPONENT, which indicates that the file is used for a script template.
   * 
   * @example
   * 0
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

