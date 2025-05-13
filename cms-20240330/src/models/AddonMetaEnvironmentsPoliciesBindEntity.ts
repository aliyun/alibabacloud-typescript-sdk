// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddonMetaEnvironmentsPoliciesBindEntity extends $dara.Model {
  entityGroupMode?: boolean;
  entityType?: string;
  singleEntityMode?: boolean;
  vpcIdFieldKey?: string;
  static names(): { [key: string]: string } {
    return {
      entityGroupMode: 'entityGroupMode',
      entityType: 'entityType',
      singleEntityMode: 'singleEntityMode',
      vpcIdFieldKey: 'vpcIdFieldKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      entityGroupMode: 'boolean',
      entityType: 'string',
      singleEntityMode: 'boolean',
      vpcIdFieldKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

