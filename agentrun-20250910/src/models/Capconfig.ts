// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CAPConfig extends $dara.Model {
  functionName?: string;
  name?: string;
  templateId?: number;
  static names(): { [key: string]: string } {
    return {
      functionName: 'functionName',
      name: 'name',
      templateId: 'templateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      functionName: 'string',
      name: 'string',
      templateId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

