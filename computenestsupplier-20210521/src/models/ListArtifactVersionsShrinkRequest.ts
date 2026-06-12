// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactVersionsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The artifact ID.
   * 
   * To obtain the artifact ID, call the [ListArtifacts](https://help.aliyun.com/document_detail/469993.html) operation.
   * 
   * This parameter is required.
   * 
   * @example
   * artifact-eea08d1e2d3a43ae****
   */
  artifactId?: string;
  /**
   * @remarks
   * The filter.
   */
  filtersShrink?: string;
  /**
   * @remarks
   * The number of entries to return on each page. The maximum value is 100. The default value is 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token to retrieve the next page of results. Set this to the NextToken value from the previous call.
   * 
   * @example
   * AAAAAc3HCuYhJi/wvpk4xOr0VLbfVwapgMwCN1wYzPVzLbItEdB0uWSY7AGnM3qCgm/YnjuEfwSnMwiMkcUoI0hR****
   */
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      artifactId: 'ArtifactId',
      filtersShrink: 'Filters',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      artifactId: 'string',
      filtersShrink: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

