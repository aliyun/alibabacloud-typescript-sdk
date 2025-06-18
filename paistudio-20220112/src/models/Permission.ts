// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class Permission extends $dara.Model {
  isEnabled?: boolean;
  resourceType?: string;
  static names(): { [key: string]: string } {
    return {
      isEnabled: 'IsEnabled',
      resourceType: 'ResourceType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isEnabled: 'boolean',
      resourceType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

