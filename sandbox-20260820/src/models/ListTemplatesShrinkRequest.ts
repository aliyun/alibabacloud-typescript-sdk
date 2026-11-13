// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplatesShrinkRequest extends $dara.Model {
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
   * The pagination token. Use the nextToken value returned in the previous response.
   * 
   * @example
   * cae5f900-8b1d-4c0e-9c2a-1a2b3c4d5e6f
   */
  nextToken?: string;
  /**
   * @remarks
   * The resource tags.
   */
  resourceTagsShrink?: string;
  /**
   * @remarks
   * The team ID.
   * 
   * @example
   * 13b721e6-8cc8-5df2-af13-80316f7508af
   */
  teamID?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      resourceTagsShrink: 'resourceTags',
      teamID: 'teamID',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      resourceTagsShrink: 'string',
      teamID: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

