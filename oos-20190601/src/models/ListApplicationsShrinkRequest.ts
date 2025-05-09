// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListApplicationsShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * The type of the application.
   * 
   * Valid values:
   * 
   * *   ComputeNest
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   Custom
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * *   DingTalk
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   *     <!-- -->
   * 
   * @example
   * DingTalk
   */
  applicationType?: string;
  /**
   * @remarks
   * The number of entries to return on each page. Valid values: 10 to 100. Default value: 50.
   * 
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @remarks
   * The name of the application.
   * 
   * @example
   * "MyApplications"
   */
  name?: string;
  /**
   * @remarks
   * The names of the applications.
   * 
   * @example
   * ["MyApplication"]
   */
  names?: string;
  /**
   * @remarks
   * The pagination token that is used in the next request to retrieve a new page of results.
   * 
   * @example
   * -
   */
  nextToken?: string;
  /**
   * @remarks
   * The region ID. Set the value to cn-hangzhou.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The tags.
   * 
   * @example
   * {"k1": "v1","k2": "v2"}
   */
  tagsShrink?: string;
  static names(): { [key: string]: string } {
    return {
      applicationType: 'ApplicationType',
      maxResults: 'MaxResults',
      name: 'Name',
      names: 'Names',
      nextToken: 'NextToken',
      regionId: 'RegionId',
      tagsShrink: 'Tags',
    };
  }

  static types(): { [key: string]: any } {
    return {
      applicationType: 'string',
      maxResults: 'number',
      name: 'string',
      names: 'string',
      nextToken: 'string',
      regionId: 'string',
      tagsShrink: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

