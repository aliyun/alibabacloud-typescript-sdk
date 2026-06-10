// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListSkillFilesRequestFilter extends $dara.Model {
  /**
   * @example
   * 111111
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

export class ListSkillFilesRequest extends $dara.Model {
  filter?: ListSkillFilesRequestFilter[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
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

