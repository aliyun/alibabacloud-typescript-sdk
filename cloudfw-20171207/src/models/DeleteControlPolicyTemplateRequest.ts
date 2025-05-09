// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteControlPolicyTemplateRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the content within the request and response. Valid values:
   * 
   * *   **zh** (default): Chinese
   * *   **en**: English
   * 
   * @example
   * en
   */
  lang?: string;
  /**
   * @remarks
   * The source IP address of the request.
   * 
   * @example
   * 61.178.12.52
   */
  sourceIp?: string;
  /**
   * @remarks
   * The ID of the access control policy template.
   * 
   * This parameter is required.
   * 
   * @example
   * 719ce620-ae23-4e42-9f93-9191b4400b55
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      sourceIp: 'SourceIp',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      sourceIp: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

