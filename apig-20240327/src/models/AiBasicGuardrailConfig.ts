// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AiBasicGuardrailConfig extends $dara.Model {
  /**
   * @remarks
   * The read-only display eligibility, which is calculated by the server based on instance capabilities, regional canary releases, and existing configurations. A value of true indicates that the entry can be displayed, and false indicates that it is not displayed. This value does not indicate that the protection is enabled or published successfully. The client does not need to set this value. It is ignored and not saved when passed back.
   * 
   * @example
   * true
   */
  display?: boolean;
  /**
   * @remarks
   * Specifies whether to enable basic security detection for model responses. A value of true indicates that the detection is enabled, and false indicates that it is disabled. The field is updated only when a Boolean value is explicitly submitted. If the field is omitted or null is passed, the saved value is retained. If this field has not been saved, response detection is enabled by default at runtime. The overall policy is still controlled by the outer enable field.
   * 
   * @example
   * true
   * 
   * **if can be null:**
   * true
   */
  responseEnabled?: boolean;
  /**
   * @remarks
   * The response detection mode, which only processes the exact string async. The mode is updated only when async is explicitly submitted. Other values, empty strings, null, or omissions do not modify the saved mode. If no mode is saved, x-ai-guard-response-mode is not delivered. async is an example of an optional configuration, not a default value.
   * 
   * @example
   * async
   * 
   * **if can be null:**
   * true
   */
  responseMode?: string;
  static names(): { [key: string]: string } {
    return {
      display: 'display',
      responseEnabled: 'responseEnabled',
      responseMode: 'responseMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      display: 'boolean',
      responseEnabled: 'boolean',
      responseMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

