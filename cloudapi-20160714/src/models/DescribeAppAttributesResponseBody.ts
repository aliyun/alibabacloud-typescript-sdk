// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeAppAttributesResponseBodyAppsAppAttributeTagsTagInfo extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesResponseBodyAppsAppAttributeTags extends $dara.Model {
  tagInfo?: DescribeAppAttributesResponseBodyAppsAppAttributeTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeAppAttributesResponseBodyAppsAppAttributeTagsTagInfo },
    };
  }

  validate() {
    if(Array.isArray(this.tagInfo)) {
      $dara.Model.validateArray(this.tagInfo);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesResponseBodyAppsAppAttribute extends $dara.Model {
  appId?: number;
  appName?: string;
  createdTime?: string;
  description?: string;
  disabled?: boolean;
  extend?: string;
  modifiedTime?: string;
  tags?: DescribeAppAttributesResponseBodyAppsAppAttributeTags;
  static names(): { [key: string]: string } {
    return {
      appId: 'AppId',
      appName: 'AppName',
      createdTime: 'CreatedTime',
      description: 'Description',
      disabled: 'Disabled',
      extend: 'Extend',
      modifiedTime: 'ModifiedTime',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appId: 'number',
      appName: 'string',
      createdTime: 'string',
      description: 'string',
      disabled: 'boolean',
      extend: 'string',
      modifiedTime: 'string',
      tags: DescribeAppAttributesResponseBodyAppsAppAttributeTags,
    };
  }

  validate() {
    if(this.tags && typeof (this.tags as any).validate === 'function') {
      (this.tags as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesResponseBodyApps extends $dara.Model {
  appAttribute?: DescribeAppAttributesResponseBodyAppsAppAttribute[];
  static names(): { [key: string]: string } {
    return {
      appAttribute: 'AppAttribute',
    };
  }

  static types(): { [key: string]: any } {
    return {
      appAttribute: { 'type': 'array', 'itemType': DescribeAppAttributesResponseBodyAppsAppAttribute },
    };
  }

  validate() {
    if(Array.isArray(this.appAttribute)) {
      $dara.Model.validateArray(this.appAttribute);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeAppAttributesResponseBody extends $dara.Model {
  apps?: DescribeAppAttributesResponseBodyApps;
  /**
   * @remarks
   * The page number of the returned page.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries returned per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The ID of the request.
   * 
   * @example
   * 8883AC74-259D-4C0B-99FC-0B7F9A588B2F
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of returned entries.
   * 
   * @example
   * 1
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      apps: 'Apps',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apps: DescribeAppAttributesResponseBodyApps,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.apps && typeof (this.apps as any).validate === 'function') {
      (this.apps as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

