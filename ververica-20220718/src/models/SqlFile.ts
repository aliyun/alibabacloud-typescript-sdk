// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlFile extends $dara.Model {
  /**
   * @remarks
   * The batch mode.
   */
  batchMode?: string;
  /**
   * @remarks
   * The description of the SQL file.
   */
  description?: string;
  /**
   * @remarks
   * The name of the SQL file.
   */
  name?: string;
  /**
   * @remarks
   * The namespace.
   */
  namespace?: string;
  /**
   * @remarks
   * The ID of the parent SQL file.
   */
  parentId?: string;
  /**
   * @remarks
   * The name of the session cluster.
   */
  sessionClusterName?: string;
  /**
   * @remarks
   * The SQL file ID.
   */
  sqlFileId?: string;
  /**
   * @remarks
   * The SQL script content.
   */
  sqlScript?: string;
  /**
   * @remarks
   * The workspace ID.
   */
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      batchMode: 'batchMode',
      description: 'description',
      name: 'name',
      namespace: 'namespace',
      parentId: 'parentId',
      sessionClusterName: 'sessionClusterName',
      sqlFileId: 'sqlFileId',
      sqlScript: 'sqlScript',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      batchMode: 'string',
      description: 'string',
      name: 'string',
      namespace: 'string',
      parentId: 'string',
      sessionClusterName: 'string',
      sqlFileId: 'string',
      sqlScript: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

