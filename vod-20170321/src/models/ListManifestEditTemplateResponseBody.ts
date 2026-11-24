// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListManifestEditTemplateResponseBodyTemplateList extends $dara.Model {
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
   * The creation time. The time follows the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2026-04-10T08:00:00Z
   */
  creationTime?: string;
  /**
   * @remarks
   * The modification time. The time follows the yyyy-MM-ddTHH:mm:ssZ format (UTC).
   * 
   * @example
   * 2026-04-10T08:00:00Z
   */
  modifyTime?: string;
  /**
   * @remarks
   * The name of the track template group.
   * 
   * @example
   * multilang-tracks
   */
  name?: string;
  /**
   * @remarks
   * The template status. A value of **1** indicates enabled, and a value of **0** indicates disabled.
   * 
   * @example
   * 1
   */
  status?: number;
  /**
   * @remarks
   * The ManifestEdit template ID.
   * 
   * @example
   * 9c6581d59240de5e258ffa4c71a3e01b
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      creationTime: 'CreationTime',
      modifyTime: 'ModifyTime',
      name: 'Name',
      status: 'Status',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'string',
      creationTime: 'string',
      modifyTime: 'string',
      name: 'string',
      status: 'number',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListManifestEditTemplateResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries returned for the current request.
   * 
   * @example
   * 30
   */
  maxResults?: number;
  /**
   * @remarks
   * The position returned by the current call. An empty value indicates that all data has been retrieved.
   * 
   * This parameter is required.
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
   * The list of ManifestEdit templates.
   */
  templateList?: ListManifestEditTemplateResponseBodyTemplateList[];
  /**
   * @remarks
   * The total number of entries that meet the current request conditions. This parameter is optional and is not returned by default.
   * 
   * @example
   * 5
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templateList: 'TemplateList',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templateList: { 'type': 'array', 'itemType': ListManifestEditTemplateResponseBodyTemplateList },
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.templateList)) {
      $dara.Model.validateArray(this.templateList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

