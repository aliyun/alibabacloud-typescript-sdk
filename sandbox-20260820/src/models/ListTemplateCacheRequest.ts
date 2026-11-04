// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateCacheRequest extends $dara.Model {
  /**
   * @remarks
   * The maximum number of entries to return per page. Default value: 20. Maximum value: 100.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token returned from the previous response.
   * 
   * @example
   * cae5f900-8b1d-4c0e-9c2a-1a2b3c4d5e6f
   */
  nextToken?: string;
  /**
   * @remarks
   * Filters by cache status. Valid values: InProgress, Success, Failed, Deleting, and Evicted.
   * 
   * @example
   * Success
   */
  status?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
   */
  teamID?: string;
  /**
   * @remarks
   * The unique identifier of the template.
   * 
   * @example
   * us7dxqaezw5uu7aa2cm5
   */
  templateID?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      status: 'status',
      teamID: 'teamID',
      templateID: 'templateID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      status: 'string',
      teamID: 'string',
      templateID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

