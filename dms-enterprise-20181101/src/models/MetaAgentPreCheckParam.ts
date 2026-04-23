// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MetaAgentPreCheckParam extends $dara.Model {
  dbIds?: string;
  description?: string;
  instanceIds?: string;
  supplement?: string;
  tableNames?: string;
  static names(): { [key: string]: string } {
    return {
      dbIds: 'DbIds',
      description: 'Description',
      instanceIds: 'InstanceIds',
      supplement: 'Supplement',
      tableNames: 'TableNames',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dbIds: 'string',
      description: 'string',
      instanceIds: 'string',
      supplement: 'string',
      tableNames: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

