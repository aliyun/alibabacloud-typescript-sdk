// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExecuteStatementRequestRagWorkspaceCollection extends $dara.Model {
  collection?: string;
  namespace?: string;
  static names(): { [key: string]: string } {
    return {
      collection: 'Collection',
      namespace: 'Namespace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      collection: 'string',
      namespace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

