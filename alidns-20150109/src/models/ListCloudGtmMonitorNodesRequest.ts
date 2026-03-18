// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListCloudGtmMonitorNodesRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the response. Valid values:
   * 
   * *   **zh-CN**: Chinese
   * *   **en-US** (default): English
   * 
   * @example
   * en-US
   */
  acceptLanguage?: string;
  showDisabledNodes?: boolean;
  static names(): { [key: string]: string } {
    return {
      acceptLanguage: 'AcceptLanguage',
      showDisabledNodes: 'ShowDisabledNodes',
    };
  }

  static types(): { [key: string]: any } {
    return {
      acceptLanguage: 'string',
      showDisabledNodes: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

