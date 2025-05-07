// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebTerminalRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to create a shareable link to access the container. Valid values:
   * 
   * *   true: returns a shareable link to access the container. The link will expire after 30 seconds and can only be used once. After you access the container by using the link, other requests that use this link to access the container become invalid.
   * *   false: returns a common shareable link to access the container. If you use a common shareable link to access a container, Alibaba Cloud identity authentication is required. The link will expire after 30 seconds.
   * 
   * @example
   * true
   */
  isShared?: boolean;
  /**
   * @remarks
   * The pod UID.
   * 
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592c268
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

