// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDatasetVersionsResponseBodyVersions extends $dara.Model {
  /**
   * @remarks
   * The creation time of the version, in RFC 3339 format, including time zone information. For example, the Z in 2026-11-11T06:00:00Z indicates UTC.
   * 
   * @example
   * 2026-11-11T06:00:00Z
   */
  createTime?: string;
  /**
   * @remarks
   * The description provided when the version was created. If no description was provided, an empty string is returned.
   * 
   * @example
   * The dataset version used for the first evaluation
   */
  description?: string;
  /**
   * @remarks
   * The name of the historical version, which corresponds to the name specified when the version was created. This value can be used as the version parameter for DeleteDatasetVersion.
   * 
   * @example
   * v1
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      description: 'description',
      version: 'version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      description: 'string',
      version: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListDatasetVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The maximum number of versions per page used for this query, which is not the actual number of versions returned on the current page.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next page. This parameter is returned when a next page exists. To query the next page, pass this value as is to nextToken. If this parameter is not returned or is empty, no next page exists. The example is for demonstration purposes only.
   * 
   * @example
   * umaQfI7x758Ns4TgWrj8yA3fYlnk7dJgsfhMrSViRY8=
   */
  nextToken?: string;
  /**
   * @remarks
   * The unique identifier of the request, which is used to locate and troubleshoot issues.
   * 
   * @example
   * D17DE39E-6C62-50E3-9EB7-FDE41BB0D43D
   */
  requestId?: string;
  /**
   * @remarks
   * The total number of versions of the dataset, excluding deleted versions. This value is not limited by the current page size.
   * 
   * @example
   * 35
   */
  total?: number;
  /**
   * @remarks
   * The list of historical versions of the dataset on the current page. An empty array is returned if no versions meet the conditions.
   */
  versions?: ListDatasetVersionsResponseBodyVersions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      total: 'total',
      versions: 'versions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      total: 'number',
      versions: { 'type': 'array', 'itemType': ListDatasetVersionsResponseBodyVersions },
    };
  }

  validate() {
    if(Array.isArray(this.versions)) {
      $dara.Model.validateArray(this.versions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

