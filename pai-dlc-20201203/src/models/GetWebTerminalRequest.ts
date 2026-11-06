// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetWebTerminalRequest extends $dara.Model {
  /**
   * @remarks
   * The name of the container. If this parameter is not specified, the WebTerminal of the primary container is accessed.
   * 
   * @example
   * sidecar-test
   */
  containerName?: string;
  /**
   * @remarks
   * Specifies whether to create a shareable link for accessing the container. Valid values:
   * - true: Returns a shareable link for accessing the container. The link expires after 30 seconds and can be used only once. After the container is accessed through this link, subsequent requests to access the container by using the same link become invalid.
   * - false: Returns a regular link for accessing the container. Alibaba Cloud identity verification is required when you use the link. The link expires after 30 seconds.
   * 
   * @example
   * true
   */
  isShared?: boolean;
  /**
   * @remarks
   * The Pod UID.
   * 
   * @example
   * 94a7cc7c-0033-48b5-85bd-71c63592****
   */
  podUid?: string;
  static names(): { [key: string]: string } {
    return {
      containerName: 'ContainerName',
      isShared: 'IsShared',
      podUid: 'PodUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      containerName: 'string',
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

