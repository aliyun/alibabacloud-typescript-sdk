// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebTerminalRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to create a shared link for accessing the container. Valid values:
   * - true: Returns a shared link for accessing the container. The link expires after 30 seconds and can be used only once. After someone accesses the container through this link, subsequent requests using the same link are invalid.
   * - false: Returns a regular link for accessing the container. Alibaba Cloud identity authentication is required when using this link. The link expires after 30 seconds.
   * 
   * @example
   * true
   */
  isShared?: boolean;
  /**
   * @remarks
   * Pod UID。
   * 
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592****
   */
  podUid?: string;
  static names(): { [key: string]: string } {
    return {
      isShared: 'IsShared',
      podUid: 'PodUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isShared: 'boolean',
      podUid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

