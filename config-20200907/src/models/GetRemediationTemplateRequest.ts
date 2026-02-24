// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetRemediationTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The identifier of the automatic remediation template.
   * 
   * For information about how to obtain the remediation template identifier, see [Compliance library](https://help.aliyun.com/document_detail/2337741.html).
   * 
   * @example
   * ACS-ALB-BulkyEnableDeletionProtection
   * 
   * **if can be null:**
   * true
   */
  templateIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      templateIdentifier: 'TemplateIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

