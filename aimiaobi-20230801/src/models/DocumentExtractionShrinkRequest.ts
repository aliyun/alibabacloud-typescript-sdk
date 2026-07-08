// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DocumentExtractionShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * Unique identifier of the workspace: [AgentKey](https://help.aliyun.com/document_detail/2587494.html)
   * 
   * This parameter is required.
   * 
   * @example
   * xxxxx_p_efm
   */
  agentKey?: string;
  /**
   * @remarks
   * List of URLs to extract.
   * 
   * This parameter is required.
   */
  urlsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      agentKey: 'AgentKey',
      urlsShrink: 'Urls',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentKey: 'string',
      urlsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

