// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetLineageInfoParams extends $dara.Model {
  depth?: number;
  direction?: string;
  id?: string;
  idType?: string;
  isColumnLevel?: boolean;
  isTemporary?: boolean;
  namespace?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      depth: 'depth',
      direction: 'direction',
      id: 'id',
      idType: 'idType',
      isColumnLevel: 'isColumnLevel',
      isTemporary: 'isTemporary',
      namespace: 'namespace',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      depth: 'number',
      direction: 'string',
      id: 'string',
      idType: 'string',
      isColumnLevel: 'boolean',
      isTemporary: 'boolean',
      namespace: 'string',
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

