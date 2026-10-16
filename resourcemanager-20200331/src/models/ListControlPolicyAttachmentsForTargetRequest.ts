// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListControlPolicyAttachmentsForTargetRequest extends $dara.Model {
  /**
   * @remarks
   * The language in which the control policy descriptions are returned. Valid values:
   * 
   * - zh-CN (default): Chinese.
   * - en: English.
   * - ja: Japanese.
   * 
   * > This parameter is valid only for system control policies.
   * 
   * @example
   * zh-CN
   */
  language?: string;
  /**
   * @remarks
   * The target node. Valid values:
   * 
   * - Root ID: queries the control policies attached to the Root node.
   * - Resource folder ID: queries the control policies attached to a resource folder.
   * - Member ID: queries the control policies attached to a member.
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

