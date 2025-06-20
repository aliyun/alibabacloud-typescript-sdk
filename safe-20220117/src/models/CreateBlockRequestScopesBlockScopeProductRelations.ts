// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateBlockRequestScopesBlockScopeProductRelations extends $dara.Model {
  appCodes?: string[];
  labelCodes?: string[];
  relateCodes?: string[];
  selfCode?: string;
  static names(): { [key: string]: string } {
    return {
      appCodes: 'AppCodes',
      labelCodes: 'LabelCodes',
      relateCodes: 'RelateCodes',
      selfCode: 'SelfCode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appCodes: { 'type': 'array', 'itemType': 'string' },
      labelCodes: { 'type': 'array', 'itemType': 'string' },
      relateCodes: { 'type': 'array', 'itemType': 'string' },
      selfCode: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.appCodes)) {
      $dara.Model.validateArray(this.appCodes);
    }
    if(Array.isArray(this.labelCodes)) {
      $dara.Model.validateArray(this.labelCodes);
    }
    if(Array.isArray(this.relateCodes)) {
      $dara.Model.validateArray(this.relateCodes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

