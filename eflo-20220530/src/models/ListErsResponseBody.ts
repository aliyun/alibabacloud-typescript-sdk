// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListErsResponseBodyContentDataTags extends $dara.Model {
  /**
   * @remarks
   * The tag key.
   * 
   * @example
   * myTest
   */
  tagKey?: string;
  /**
   * @remarks
   * The tag value.
   * 
   * @example
   * test
   */
  tagValue?: string;
  static names(): { [key: string]: string } {
    return {
      tagKey: 'TagKey',
      tagValue: 'TagValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagKey: 'string',
      tagValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErsResponseBodyContentData extends $dara.Model {
  /**
   * @remarks
   * The number of connections to the Lingjun HUB network instance.
   * 
   * @example
   * 2
   */
  connections?: number;
  /**
   * @remarks
   * The time when the activation code was created.
   * 
   * @example
   * 1640930671000
   */
  createTime?: string;
  /**
   * @remarks
   * The description of the synchronization task.
   * 
   * @example
   * No description
   */
  description?: string;
  /**
   * @remarks
   * The ID of the Lingjun HUB instance.
   * 
   * @example
   * er-kkopgtne
   */
  erId?: string;
  /**
   * @remarks
   * The name of the Lingjun HUB instance.
   * 
   * @example
   * er-wulanchabu-main
   */
  erName?: string;
  /**
   * @remarks
   * The time when the O\\&M task was modified.
   * 
   * @example
   * 1640930671000
   */
  gmtModified?: string;
  /**
   * @remarks
   * The primary zone.
   * 
   * @example
   * cn-wulanchabu-b
   */
  masterZoneId?: string;
  /**
   * @remarks
   * The returned message.
   * 
   * @example
   * test
   */
  message?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * cn-wulanchabu
   */
  regionId?: string;
  /**
   * @remarks
   * Resource group instance ID
   * 
   * @example
   * rg-acfmv2m2w43japa
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Number of Lingjun HUB routing policy.
   * 
   * @example
   * 2
   */
  routeMaps?: number;
  /**
   * @remarks
   * The task status.
   * 
   * @example
   * Available
   */
  status?: string;
  /**
   * @remarks
   * The list of tags.
   */
  tags?: ListErsResponseBodyContentDataTags[];
  /**
   * @remarks
   * The tenant ID.
   * 
   * @example
   * 1655449505171
   */
  tenantId?: string;
  static names(): { [key: string]: string } {
    return {
      connections: 'Connections',
      createTime: 'CreateTime',
      description: 'Description',
      erId: 'ErId',
      erName: 'ErName',
      gmtModified: 'GmtModified',
      masterZoneId: 'MasterZoneId',
      message: 'Message',
      regionId: 'RegionId',
      resourceGroupId: 'ResourceGroupId',
      routeMaps: 'RouteMaps',
      status: 'Status',
      tags: 'Tags',
      tenantId: 'TenantId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      connections: 'number',
      createTime: 'string',
      description: 'string',
      erId: 'string',
      erName: 'string',
      gmtModified: 'string',
      masterZoneId: 'string',
      message: 'string',
      regionId: 'string',
      resourceGroupId: 'string',
      routeMaps: 'number',
      status: 'string',
      tags: { 'type': 'array', 'itemType': ListErsResponseBodyContentDataTags },
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

export class ListErsResponseBodyContent extends $dara.Model {
  /**
   * @remarks
   * lingjun hub information list.
   */
  data?: ListErsResponseBodyContentData[];
  /**
   * @remarks
   * The total number of entries.
   * 
   * @example
   * 1
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': ListErsResponseBodyContentData },
      total: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListErsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The details about the access denial.
   * 
   * @example
   * None
   */
  accessDeniedDetail?: string;
  /**
   * @remarks
   * The response status code.
   * 
   * @example
   * 0
   */
  code?: number;
  /**
   * @remarks
   * The response data.
   */
  content?: ListErsResponseBodyContent;
  /**
   * @remarks
   * The error message. (If the instance is in the Exception state, the exception cause is displayed.)
   * 
   * @example
   * success
   */
  message?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * AC8C713A-A9F4-5984-A5E1-76496DF35153
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      accessDeniedDetail: 'AccessDeniedDetail',
      code: 'Code',
      content: 'Content',
      message: 'Message',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      accessDeniedDetail: 'string',
      code: 'number',
      content: ListErsResponseBodyContent,
      message: 'string',
      requestId: 'string',
    };
  }

  validate() {
    if(this.content && typeof (this.content as any).validate === 'function') {
      (this.content as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

