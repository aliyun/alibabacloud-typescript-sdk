// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlFile extends $dara.Model {
  /**
   * @deprecated
   */
  batchMode?: string;
  description?: string;
  /**
   * @remarks
   * The query script name. This field is required when creating a SqlFile.
   */
  name?: string;
  namespace?: string;
  /**
   * @remarks
   * The parent folder ID. This field is required when creating a SqlFile.
   */
  parentId?: string;
  /**
   * @remarks
   * The session cluster for running the query script. This field is required when creating a SqlFile.
   */
  sessionClusterName?: string;
  sqlFileId?: string;
  /**
   * @remarks
   * The SQL script. This field is required when creating a SqlFile.
   */
  sqlScript?: string;
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

