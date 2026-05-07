// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListDigitalEmployeeSkillsRequest extends $dara.Model {
  /**
   * @example
   * 10
   */
  maxResults?: number;
  /**
   * @example
   * sjC5rekx93Ew7K7VcmI3wkBZBYQ-GphB2ilQu3zJCGxoZuicwyJznfo2riTjr-lq
   */
  nextToken?: string;
  /**
   * @example
   * test
   */
  skillName?: string;
  static names(): { [key: string]: string } {
    return {
      maxResults: 'maxResults',
      nextToken: 'nextToken',
      skillName: 'skillName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      maxResults: 'number',
      nextToken: 'string',
      skillName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

