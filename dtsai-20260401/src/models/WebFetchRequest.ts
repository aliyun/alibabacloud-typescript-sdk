// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class WebFetchRequest extends $dara.Model {
  agentName?: string;
  /**
   * @remarks
   * The output format. Valid values:
   * 
   * - **markdown**: Markdown format.
   * 
   * - **html**: HTML format.
   * 
   * - **text**: Plain text format.
   * 
   * @example
   * markdown
   */
  outputFormat?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-beijing
   */
  regionId?: string;
  /**
   * @remarks
   * The URL of the target web page to crawl.
   * 
   * This parameter is required.
   * 
   * @example
   * https://xxx/projects/spring-boot
   */
  url?: string;
  static names(): { [key: string]: string } {
    return {
      agentName: 'AgentName',
      outputFormat: 'OutputFormat',
      regionId: 'RegionId',
      url: 'Url',
    };
  }

  static types(): { [key: string]: any } {
    return {
      agentName: 'string',
      outputFormat: 'string',
      regionId: 'string',
      url: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

