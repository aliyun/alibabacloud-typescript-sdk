// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListOutputFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The business ID used for exact filtering. The length is 1 to 128 characters. This value is derived from the businessId of the file registration or associated workflow instance.
   * 
   * @example
   * REQ-20261012-001
   */
  bizId?: string;
  /**
   * @remarks
   * The ID of the collaboration workspace. The length is 1 to 64 characters. This parameter is optional. If not specified, the personal outputs of the current user are queried. If specified, the real-time permissions of the workspace members and source resources are verified.
   * 
   * @example
   * cg_123e4567-e89b-42d3-a456-426614174001
   */
  collaborationGroupId?: string;
  /**
   * @remarks
   * The output item type. Valid values: ppt, html, document, picture, slides, video, audio, email, and others.
   * 
   * @example
   * document
   */
  itemType?: string;
  /**
   * @remarks
   * The keyword used to match the output title or detail name.
   * 
   * @example
   * Quarterly operations
   */
  keyword?: string;
  /**
   * @remarks
   * The name of the digital employee (operating object). Filters outputs by name.
   * 
   * @example
   * Business Analysis Assistant
   */
  operatingObjectName?: string;
  /**
   * @remarks
   * The page number. Pages start from 1. Default value: 1.
   * 
   * @example
   * 1
   */
  page?: number;
  /**
   * @remarks
   * The number of items per page. Valid values: 1 to 100. Default value: 20.
   * 
   * @example
   * 20
   */
  pageSize?: number;
  /**
   * @remarks
   * The session ID used for exact filtering. The length is 1 to 128 characters. This parameter applies to regular sessions, skill sessions, and the executionId of task executions.
   * 
   * @example
   * session_123e4567-e89b-42d3-a456-426614174008
   */
  sessionId?: string;
  /**
   * @remarks
   * Specifies whether to display only shared outputs and output details.
   * 
   * @example
   * False
   */
  sharedOnly?: boolean;
  /**
   * @remarks
   * The tags used for exact filtering. All specified tags must be matched simultaneously. You can specify up to 20 tags. Each tag must be a non-empty string of 1 to 128 characters. Tags are derived from file registrations or the variables.tags of associated instances.
   */
  tags?: string[];
  /**
   * @remarks
   * The tenant ID. This is a common parameter. If not specified, the default tenant of the caller is used. The identity and tenant permissions are determined by the gateway and backend authentication.
   * 
   * @example
   * 10000
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      bizId: 'bizId',
      collaborationGroupId: 'collaborationGroupId',
      itemType: 'itemType',
      keyword: 'keyword',
      operatingObjectName: 'operatingObjectName',
      page: 'page',
      pageSize: 'pageSize',
      sessionId: 'sessionId',
      sharedOnly: 'sharedOnly',
      tags: 'tags',
      tenantId: 'tenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizId: 'string',
      collaborationGroupId: 'string',
      itemType: 'string',
      keyword: 'string',
      operatingObjectName: 'string',
      page: 'number',
      pageSize: 'number',
      sessionId: 'string',
      sharedOnly: 'boolean',
      tags: { 'type': 'array', 'itemType': 'string' },
      tenantId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.tags)) {
      $dara.Model.validateArray(this.tags);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

