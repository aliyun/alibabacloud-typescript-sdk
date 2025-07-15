// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateVersionsResponseBodyTemplateVersions extends $dara.Model {
  /**
   * @remarks
   * The description of the version.
   * 
   * @example
   * Detach the eip from the special instance.
   */
  description?: string;
  /**
   * @remarks
   * The format of the template content. Valid values: YAML and JSON.
   * 
   * @example
   * YAML
   */
  templateFormat?: string;
  /**
   * @remarks
   * The number of the version.
   * 
   * @example
   * v2
   */
  templateVersion?: string;
  /**
   * @remarks
   * The user who last updated the version.
   * 
   * @example
   * foo
   */
  updatedBy?: string;
  /**
   * @remarks
   * The time when the version was last updated.
   * 
   * @example
   * 2020-05-19T06:05:41Z
   */
  updatedDate?: string;
  /**
   * @remarks
   * The name of the version.
   * 
   * @example
   * baz
   */
  versionName?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      templateFormat: 'TemplateFormat',
      templateVersion: 'TemplateVersion',
      updatedBy: 'UpdatedBy',
      updatedDate: 'UpdatedDate',
      versionName: 'VersionName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      templateFormat: 'string',
      templateVersion: 'string',
      updatedBy: 'string',
      updatedDate: 'string',
      versionName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateVersionsResponseBody extends $dara.Model {
  /**
   * @remarks
   * The number of entries per page.
   * 
   * @example
   * 50
   */
  maxResults?: number;
  /**
   * @remarks
   * A pagination token. It can be used in the next request to retrieve a new page of results.
   * 
   * @example
   * NJSNDKLJS-SJKJDO090k30-JSDK232
   */
  nextToken?: string;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * E6CD612B-5889-4F1A-823F-8A4029E46
   */
  requestId?: string;
  /**
   * @remarks
   * The versions of the template.
   */
  templateVersions?: ListTemplateVersionsResponseBodyTemplateVersions[];
  static names(): { [key: string]: string } {
    return {
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      requestId: 'RequestId',
      templateVersions: 'TemplateVersions',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      templateVersions: { 'type': 'array', 'itemType': ListTemplateVersionsResponseBodyTemplateVersions },
    };
  }

  validate() {
    if(Array.isArray(this.templateVersions)) {
      $dara.Model.validateArray(this.templateVersions);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

