// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactBuildLogsRequestFilter extends $dara.Model {
  /**
   * @remarks
   * The name of the filter.
   * 
   * Valid values:
   * 
   * - StartTime
   * 
   * - EndTime
   * 
   * - ApplicationGroupName
   * 
   * - ResouceName
   * 
   * - EventName
   * 
   * @example
   * BuildStartTime
   */
  name?: string;
  /**
   * @remarks
   * The filter values.
   */
  value?: string[];
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      value: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.value)) {
      $dara.Model.validateArray(this.value);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListArtifactBuildLogsRequest extends $dara.Model {
  /**
   * @remarks
   * The artifact ID.
   * 
   * You can call the [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) operation to obtain the artifact ID.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-fbad2ca276194d019714
   */
  artifactId?: string;
  /**
   * @remarks
   * The artifact version.
   * 
   * You can call the [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) operation to obtain the artifact version.
   * 
   * @example
   * draft
   */
  artifactVersion?: string;
  /**
   * @remarks
   * The filter.
   */
  filter?: ListArtifactBuildLogsRequestFilter[];
  /**
   * @remarks
   * The number of entries to return on each page. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to start the next paged query.
   * 
   * @example
   * AAAAAbL3H6CZmy6oocwGDqzQ+Gc=
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The sort order. Valid values:
   * 
   * - **Ascending**: sorts the results in ascending order.
   * 
   * - **Descending** (default): sorts the results in descending order.
   * 
   * @example
   * Ascending
   */
  sortOrder?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      artifactVersion: 'ArtifactVersion',
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      sortOrder: 'SortOrder',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      artifactVersion: 'string',
      filter: { 'type': 'array', 'itemType': ListArtifactBuildLogsRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      regionId: 'string',
      sortOrder: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.filter)) {
      $dara.Model.validateArray(this.filter);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

