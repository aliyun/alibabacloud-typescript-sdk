// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { Skill } from "./Skill";


export class SearchSkillsResponseBody extends $dara.Model {
  data?: Skill[];
  /**
   * @example
   * 20
   */
  maxResults?: number;
  /**
   * @example
   * AAAAAZjtYxxxxxxxx
   */
  nextToken?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 53EAEBC0-4DEC-5AF4-AA21-3923D5A819C3
   */
  requestId?: string;
  /**
   * @example
   * 22
   */
  totalCount?: number;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      requestId: 'requestId',
      totalCount: 'totalCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: { 'type': 'array', 'itemType': Skill },
      maxResults: 'number',
      nextToken: 'string',
      requestId: 'string',
      totalCount: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

