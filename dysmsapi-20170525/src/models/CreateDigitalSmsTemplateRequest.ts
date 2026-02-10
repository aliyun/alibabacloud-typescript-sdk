// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateDigitalSmsTemplateRequestTemplateContents extends $dara.Model {
  fileContents?: string;
  /**
   * @example
   * file-1
   */
  fileName?: string;
  /**
   * @example
   * 1840901
   */
  fileSize?: number;
  /**
   * @example
   * txt
   */
  fileSuffix?: string;
  static names(): { [key: string]: string } {
    return {
      fileContents: 'FileContents',
      fileName: 'FileName',
      fileSize: 'FileSize',
      fileSuffix: 'FileSuffix',
    };
  }

  static types(): { [key: string]: any } {
    return {
      fileContents: 'string',
      fileName: 'string',
      fileSize: 'number',
      fileSuffix: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class CreateDigitalSmsTemplateRequest extends $dara.Model {
  ownerId?: number;
  /**
   * @remarks
   * This parameter is required.
   */
  remark?: string;
  resourceOwnerAccount?: string;
  resourceOwnerId?: number;
  signName?: string;
  /**
   * @remarks
   * This parameter is required.
   */
  templateContents?: CreateDigitalSmsTemplateRequestTemplateContents[];
  /**
   * @remarks
   * This parameter is required.
   */
  templateName?: string;
  static names(): { [key: string]: string } {
    return {
      ownerId: 'OwnerId',
      remark: 'Remark',
      resourceOwnerAccount: 'ResourceOwnerAccount',
      resourceOwnerId: 'ResourceOwnerId',
      signName: 'SignName',
      templateContents: 'TemplateContents',
      templateName: 'TemplateName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      ownerId: 'number',
      remark: 'string',
      resourceOwnerAccount: 'string',
      resourceOwnerId: 'number',
      signName: 'string',
      templateContents: { 'type': 'array', 'itemType': CreateDigitalSmsTemplateRequestTemplateContents },
      templateName: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.templateContents)) {
      $dara.Model.validateArray(this.templateContents);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

