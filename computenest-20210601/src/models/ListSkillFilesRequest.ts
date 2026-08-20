// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillFilesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * No supported filter names are available.
   * 
   * @example
   * xxx
   */
  name?: string;
  /**
   * @remarks
   * The list of filter values. Valid values of N: 1 to 10.
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

export class ListSkillFilesRequest extends $dara.Model {
  /**
   * @remarks
   * The filter.
   */
  filter?: ListSkillFilesRequestFilter[];
  /**
   * @remarks
   * The number of entries per page in a paging query. Maximum value: 100. Default value: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The pagination token for the next query.
   * 
   * @example
   * AAAAAVz7BQqj2xtiNSC3d3RAD38=
   */
  nextToken?: string;
  /**
   * @remarks
   * Skill ID
   * 
   * This parameter is required.
   * 
   * @example
   * s-xxxxx
   */
  skillId?: string;
  static names(): { [key: string]: string } {
    return {
      filter: 'Filter',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
      skillId: 'SkillId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      filter: { 'type': 'array', 'itemType': ListSkillFilesRequestFilter },
      maxResults: 'number',
      nextToken: 'string',
      skillId: 'string',
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

