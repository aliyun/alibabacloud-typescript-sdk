// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListMediaConvertTemplateGroupResponseBodyTemplateGroupList extends $dara.Model {
  /**
   * @remarks
   * The application ID. Default value: **app-1000000**. For more information, see [Multiple applications](https://help.aliyun.com/document_detail/113600.html).
   * 
   * @example
   * app-****
   */
  appId?: string;
  /**
   * @remarks
   * The creation time. The time is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-04-10T08:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The group-level configuration.
   * 
   * @example
   * {"AutoStreamName":"{RunId}_master"}
   */
  groupConfig?: string;
  /**
   * @remarks
   * The modification time. The time is displayed in UTC in the yyyy-MM-ddTHH:mm:ssZ format.
   * 
   * @example
   * 2026-04-10T08:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the transcoding template group.
   * 
   * @example
   * mcTemplateGroup
   */
  name?: string;
  /**
   * @remarks
   * The type of the template group. Valid values: **Normal**: normal transcoding template group; **VideoPackage**: video packaging template group.
   * 
   * @example
   * Normal
   */
  templateType?: string;
  /**
   * @remarks
   * The ID of the transcoding template group.
   * 
   * @example
   * 4c71a339fe52b4fa6f4527****
   */
  transcodeTemplateGroupId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      groupConfig: 'GroupConfig',
      modifyTime: 'ModifyTime',
      name: 'Name',
      templateType: 'TemplateType',
      transcodeTemplateGroupId: 'TranscodeTemplateGroupId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      groupConfig: 'string',
      modifyTime: 'string',
      name: 'string',
      templateType: 'string',
      transcodeTemplateGroupId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListMediaConvertTemplateGroupResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned in the current request.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination cursor for the next page, in the format of page_N. If this parameter is not returned, all data has been read.
   * 
   * @example
   * page_2
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 25818875-5F78-4AF6-D7393642CA58****
   */
  requestId?: string;
  /**
   * @remarks
   * The list of transcoding template groups.
   */
  templateGroupList?: ListMediaConvertTemplateGroupResponseBodyTemplateGroupList[];
  /**
   * @remarks
   * The total number of transcoding template groups that meet the query conditions.
   * 
   * @example
   * 2
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templateGroupList: 'TemplateGroupList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templateGroupList: { 'type': 'array', 'itemType': ListMediaConvertTemplateGroupResponseBodyTemplateGroupList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateGroupList)) {
      $dara.Model.validateArray(this.templateGroupList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

