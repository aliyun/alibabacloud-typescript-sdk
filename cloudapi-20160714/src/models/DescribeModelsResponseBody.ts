// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeModelsResponseBodyModelDetailsModelDetailTagsTagInfo extends $dara.Model {
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

export class DescribeModelsResponseBodyModelDetailsModelDetailTags extends $dara.Model {
  tagInfo?: DescribeModelsResponseBodyModelDetailsModelDetailTagsTagInfo[];
  static names(): { [key: string]: string } {
    return {
      tagInfo: 'TagInfo',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagInfo: { 'type': 'array', 'itemType': DescribeModelsResponseBodyModelDetailsModelDetailTagsTagInfo },
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

export class DescribeModelsResponseBodyModelDetailsModelDetail extends $dara.Model {
  createdTime?: string;
  description?: string;
  groupId?: string;
  modelId?: string;
  modelName?: string;
  modelRef?: string;
  modifiedTime?: string;
  schema?: string;
  tags?: DescribeModelsResponseBodyModelDetailsModelDetailTags;
  static names(): { [key: string]: string } {
    return {
      createdTime: 'CreatedTime',
      description: 'Description',
      groupId: 'GroupId',
      modelId: 'ModelId',
      modelName: 'ModelName',
      modelRef: 'ModelRef',
      modifiedTime: 'ModifiedTime',
      schema: 'Schema',
      tags: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdTime: 'string',
      description: 'string',
      groupId: 'string',
      modelId: 'string',
      modelName: 'string',
      modelRef: 'string',
      modifiedTime: 'string',
      schema: 'string',
      tags: DescribeModelsResponseBodyModelDetailsModelDetailTags,
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

export class DescribeModelsResponseBodyModelDetails extends $dara.Model {
  modelDetail?: DescribeModelsResponseBodyModelDetailsModelDetail[];
  static names(): { [key: string]: string } {
    return {
      modelDetail: 'ModelDetail',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelDetail: { 'type': 'array', 'itemType': DescribeModelsResponseBodyModelDetailsModelDetail },
    };
  }

  validate() {
    if(Array.isArray(this.modelDetail)) {
      $dara.Model.validateArray(this.modelDetail);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeModelsResponseBody extends $dara.Model {
  modelDetails?: DescribeModelsResponseBodyModelDetails;
  /**
   * @remarks
   * The page number of the page to return.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 10
   */
  pageSize?: number;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 40306469-2FB5-417A-B723-AF1F4A4FA204
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
      modelDetails: 'ModelDetails',
      pageNumber: 'PageNumber',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      totalCount: 'TotalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      modelDetails: DescribeModelsResponseBodyModelDetails,
      pageNumber: 'number',
      pageSize: 'number',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(this.modelDetails && typeof (this.modelDetails as any).validate === 'function') {
      (this.modelDetails as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

