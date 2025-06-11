// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginAttachmentsRequest extends $dara.Model {
  /**
   * @example
   * hr-cv2h58em1hkg7c6vt43g
   */
  attachResourceId?: string;
  /**
   * @example
   * GatewayRoute
   */
  attachResourceType?: string;
  /**
   * @example
   * GatewayRoute
   */
  attachResourceTypes?: string;
  /**
   * @example
   * env-crlnqhtlhtgqflkqislg
   */
  environmentId?: string;
  /**
   * @example
   * gw-cr79f75lhtgme744084g
   */
  gatewayId?: string;
  /**
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @example
   * pl-ct8181um1hkiqns9f6e0
   */
  pluginId?: string;
  /**
   * @example
   * false
   */
  withParentResource?: boolean;
  static names(): { [key: string]: string } {
    return {
      attachResourceId: 'attachResourceId',
      attachResourceType: 'attachResourceType',
      attachResourceTypes: 'attachResourceTypes',
      environmentId: 'environmentId',
      gatewayId: 'gatewayId',
      pageNumber: 'pageNumber',
      pageSize: 'pageSize',
      pluginId: 'pluginId',
      withParentResource: 'withParentResource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      attachResourceId: 'string',
      attachResourceType: 'string',
      attachResourceTypes: 'string',
      environmentId: 'string',
      gatewayId: 'string',
      pageNumber: 'number',
      pageSize: 'number',
      pluginId: 'string',
      withParentResource: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

