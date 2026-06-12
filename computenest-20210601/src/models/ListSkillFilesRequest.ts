// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillFilesRequestFilter extends $dara.Model {
  /**
   * @remarks
   * No filter names are currently supported.
   * 
   * @example
   * 111111
   */
  name?: string;
  /**
   * @remarks
   * The filter values. You can specify 1 to 10 values.
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
   * The filter conditions.
   */
  filter?: ListSkillFilesRequestFilter[];
  /**
   * @remarks
   * The maximum number of entries to return per page. Valid values: 1 to 100. Default: 20.
   * 
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @remarks
   * The token that was returned from a previous call to this operation. Use this token to retrieve the next page of results.
   * 
   * @example
   * AAAAAVz7BQqj2xtiNSC3d3RAD38=
   */
  nextToken?: string;
  /**
   * @remarks
   * The ID of the Skill.
   * 
   * This parameter is required.
   * 
   * @example
   * 06e9dca2-0ac9-4d2e-a965-e9db9c057e00
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

