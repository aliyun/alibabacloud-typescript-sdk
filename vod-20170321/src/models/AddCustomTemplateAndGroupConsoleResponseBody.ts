// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddCustomTemplateAndGroupConsoleResponseBodyTemplateGroup extends $dara.Model {
  templateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      templateGroupId: 'TemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class AddCustomTemplateAndGroupConsoleResponseBody extends $dara.Model {
  requestId?: string;
  result?: boolean;
  templateGroup?: AddCustomTemplateAndGroupConsoleResponseBodyTemplateGroup;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      result: 'Result',
      templateGroup: 'TemplateGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      result: 'boolean',
      templateGroup: AddCustomTemplateAndGroupConsoleResponseBodyTemplateGroup,
    };
  }

  validate() {
    if(this.templateGroup && typeof (this.templateGroup as any).validate === 'function') {
      (this.templateGroup as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

