// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListPluginAttachmentsRequest extends $dara.Model {
  /**
   * @remarks
   * The resource attachment ID.
   * 
   * @example
   * hr-cv2h58em1hkg7c6vt43g
   */
  attachResourceId?: string;
  /**
   * @remarks
   * The resource attachment type (not yet in use).
   * 
   * @example
   * GatewayRoute
   */
  attachResourceType?: string;
  /**
   * @remarks
   * The resource attachment types, separated by commas.
   * 
   * @example
   * GatewayRoute
   */
  attachResourceTypes?: string;
  /**
   * @remarks
   * The environment ID.
   * 
   * @example
   * env-crlnqhtlhtgqflkqislg
   */
  environmentId?: string;
  /**
   * @remarks
   * The gateway ID.
   * 
   * @example
   * gw-cr79f75lhtgme744084g
   */
  gatewayId?: string;
  /**
   * @remarks
   * The page number to return. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page. Default value: 10.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The plug-in ID.
   * 
   * @example
   * pl-ct8181um1hkiqns9f6e0
   */
  pluginId?: string;
  /**
   * @remarks
   * Specifies whether to return parent resource attachments.
   * 
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

