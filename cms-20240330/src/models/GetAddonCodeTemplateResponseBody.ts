// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetAddonCodeTemplateResponseBodyCodes extends $dara.Model {
  /**
   * @example
   * javascript\\nnpm install @arms/rum-miniapp --save
   */
  codeTemplate?: string;
  /**
   * @example
   * cs-default-CS-cs-default-1753236205394-cs-default-CS-kubeApiserver
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      codeTemplate: 'codeTemplate',
      name: 'name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codeTemplate: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAddonCodeTemplateResponseBody extends $dara.Model {
  codes?: GetAddonCodeTemplateResponseBodyCodes[];
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 0CEC5375-C554-562B-A65F-***
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      codes: 'codes',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      codes: { 'type': 'array', 'itemType': GetAddonCodeTemplateResponseBodyCodes },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.codes)) {
      $dara.Model.validateArray(this.codes);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

