// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class SqlFile extends $dara.Model {
  batchMode?: string;
  description?: string;
  name?: string;
  namespace?: string;
  parentId?: string;
  sessionClusterName?: string;
  sqlFileId?: string;
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

