// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListControlPolicyAttachmentsForTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which you want to return the descriptions of the access control policies. Valid values:
   * 
   * *   zh-CN (default value): Chinese
   * *   en: English
   * *   ja: Japanese
   * 
   * > This parameter is valid only for system access control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The ID of the object whose access control policies you want to query. Access control policies can be attached to the following objects:
   * 
   * *   Root folder
   * *   Subfolders of the Root folder
   * *   Members
   * 
   * This parameter is required.
   * 
   * @example
   * fd-ZDNPiT****
   */
  targetId?: string;
  static names(): { [key: string]: string } {
    return {
      language: 'Language',
      targetId: 'TargetId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      language: 'string',
      targetId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

