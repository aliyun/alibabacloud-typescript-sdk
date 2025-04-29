// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RunVideoAnalysisRequestVideoRoles extends $dara.Model {
  roleInfo?: string;
  roleName?: string;
  urls?: string[];
  static names(): { [key: string]: string } {
    return {
      roleInfo: 'roleInfo',
      roleName: 'roleName',
      urls: 'urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      roleInfo: 'string',
      roleName: 'string',
      urls: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.urls)) {
      $dara.Model.validateArray(this.urls);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

