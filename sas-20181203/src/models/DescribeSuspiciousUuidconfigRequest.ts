// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeSuspiciousUUIDConfigRequest extends $dara.Model {
  /**
   * @remarks
   * The type of proactive defense. Valid values:
   * 
   * *   **auto_breaking**: virus defense
   * *   **ransomware_breaking**: ransomware capture
   * *   **webshell_cloud_breaking**: webshell defense
   * *   **alinet**: malicious behavior defense
   * *   **alisecguard**: client protection
   * 
   * This parameter is required.
   * 
   * @example
   * alinet
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

