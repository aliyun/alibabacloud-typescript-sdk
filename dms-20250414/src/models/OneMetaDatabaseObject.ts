// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class OneMetaDatabaseObject extends $dara.Model {
  objectName?: string;
  objectQualifiedName?: string;
  objectType?: string;
  static names(): { [key: string]: string } {
    return {
      objectName: 'ObjectName',
      objectQualifiedName: 'ObjectQualifiedName',
      objectType: 'ObjectType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      objectName: 'string',
      objectQualifiedName: 'string',
      objectType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

