// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListArtifactBuildLogsRequestFilter extends $dara.Model {
  /**
   * @example
   * BuildStartTime
   */
  name?: string;
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
   * This parameter is required.
   * 
   * @example
   * artifact-fbad2ca276194d019714
   */
  artifactId?: string;
  /**
   * @example
   * draft
   */
  artifactVersion?: string;
  filter?: ListArtifactBuildLogsRequestFilter[];
  /**
   * @example
   * 100
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAbL3H6CZmy6oocwGDqzQ+Gc=
   */
  nextToken?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
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

