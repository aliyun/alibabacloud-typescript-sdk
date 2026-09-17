// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources extends $dara.Model {
  /**
   * @remarks
   * The index of the source document to which the image belongs, starting from 0.
   * 
   * @example
   * 0
   */
  documentIndex?: number;
  /**
   * @remarks
   * The unique ID of the image resource.
   * 
   * @example
   * document-0/pictures/1
   */
  id?: string;
  /**
   * @remarks
   * The element reference of the image in the Docling source document structure.
   * 
   * @example
   * #/pictures/1
   */
  itemRef?: string;
  /**
   * @remarks
   * The media type of the image resource.
   * 
   * @example
   * image/png
   */
  mimeType?: string;
  /**
   * @remarks
   * The OSS URI of the image resource.
   * 
   * @example
   * oss://my-bucket/results/my-space/doc-001/artifacts/image-1.png
   */
  uri?: string;
  static names(): { [key: string]: string } {
    return {
      documentIndex: 'DocumentIndex',
      id: 'Id',
      itemRef: 'ItemRef',
      mimeType: 'MimeType',
      uri: 'Uri',
    };
  }

  static types(): { [key: string]: any } {
    return {
      documentIndex: 'number',
      id: 'string',
      itemRef: 'string',
      mimeType: 'string',
      uri: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeBaseFileShardsResponseBodyShards extends $dara.Model {
  /**
   * @remarks
   * The list of figure or table captions associated with the shard.
   */
  captions?: string[];
  /**
   * @remarks
   * The list of Docling source document structured element references associated with the shard. You can use these references to precisely locate original document elements.
   */
  docItems?: string[];
  /**
   * @remarks
   * The chain of section headings to which the shard belongs.
   */
  headings?: string[];
  /**
   * @remarks
   * The list of image resources referenced by the shard.
   */
  imageResources?: DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources[];
  /**
   * @remarks
   * The list of page numbers to which the shard belongs.
   */
  pageNumbers?: string[];
  /**
   * @remarks
   * The text content of the shard.
   * 
   * @example
   * ******
   */
  shardContent?: string;
  /**
   * @remarks
   * The index of the shard.
   * 
   * @example
   * 1
   */
  shardIndex?: number;
  static names(): { [key: string]: string } {
    return {
      captions: 'Captions',
      docItems: 'DocItems',
      headings: 'Headings',
      imageResources: 'ImageResources',
      pageNumbers: 'PageNumbers',
      shardContent: 'ShardContent',
      shardIndex: 'ShardIndex',
    };
  }

  static types(): { [key: string]: any } {
    return {
      captions: { 'type': 'array', 'itemType': 'string' },
      docItems: { 'type': 'array', 'itemType': 'string' },
      headings: { 'type': 'array', 'itemType': 'string' },
      imageResources: { 'type': 'array', 'itemType': DescribeKnowledgeBaseFileShardsResponseBodyShardsImageResources },
      pageNumbers: { 'type': 'array', 'itemType': 'string' },
      shardContent: 'string',
      shardIndex: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.captions)) {
      $dara.Model.validateArray(this.captions);
    }
    if(Array.isArray(this.docItems)) {
      $dara.Model.validateArray(this.docItems);
    }
    if(Array.isArray(this.headings)) {
      $dara.Model.validateArray(this.headings);
    }
    if(Array.isArray(this.imageResources)) {
      $dara.Model.validateArray(this.imageResources);
    }
    if(Array.isArray(this.pageNumbers)) {
      $dara.Model.validateArray(this.pageNumbers);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class DescribeKnowledgeBaseFileShardsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The current page number.
   * 
   * @example
   * 1
   */
  pageNumber?: number;
  /**
   * @remarks
   * The number of records on the current page.
   * 
   * @example
   * 10
   */
  pageRecordCount?: number;
  /**
   * @remarks
   * The number of entries per page in a paged query.
   * 
   * @example
   * 30
   */
  pageSize?: number;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 3E5CD764-xxxx-xxxx-xxxx-20E0DE84B2AF
   */
  requestId?: string;
  /**
   * @remarks
   * The shard information.
   */
  shards?: DescribeKnowledgeBaseFileShardsResponseBodyShards[];
  /**
   * @remarks
   * The total number of records.
   * 
   * @example
   * 10
   */
  totalRecordCount?: number;
  static names(): { [key: string]: string } {
    return {
      pageNumber: 'PageNumber',
      pageRecordCount: 'PageRecordCount',
      pageSize: 'PageSize',
      requestId: 'RequestId',
      shards: 'Shards',
      totalRecordCount: 'TotalRecordCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      pageNumber: 'number',
      pageRecordCount: 'number',
      pageSize: 'number',
      requestId: 'string',
      shards: { 'type': 'array', 'itemType': DescribeKnowledgeBaseFileShardsResponseBodyShards },
      totalRecordCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.shards)) {
      $dara.Model.validateArray(this.shards);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

